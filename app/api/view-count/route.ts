import { Redis } from '@upstash/redis';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  if (req.headers.get('Content-Type') !== 'application/json') {
    return new NextResponse('must be json', { status: 400 });
  }

  const body = await req.json();

  let slug: string | undefined = undefined;

  if ('slug' in body) {
    slug = body.slug;
  }
  if (!slug) {
    return new NextResponse('Slug not found', { status: 400 });
  }
  const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

  if (ip) {
    const buf = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(ip)
    );

    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
      nx: true,
      ex: 24 * 60 * 60
    });

    if (!isNew) {
      return new NextResponse('Already viewed', { status: 202 });
    }
  }
  const res = await redis.incr(['pageviews', 'projects', slug].join(':'));

  if (res) {
    // eslint-disable-next-line no-console
    console.log(res);
    revalidatePath('/writing', 'page');
  }

  return new NextResponse(null, { status: 202 });
}
