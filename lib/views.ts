'use server';

import { Redis } from '@upstash/redis';
import { unstable_noStore as noStore } from 'next/cache';

const redis = Redis.fromEnv();

export async function getViewsCount(slug: string) {
  noStore();
  const data = await redis.get<number>(
    ['pageviews', 'projects', slug].join(':')
  );

  return data ?? 0;
}

export async function getAllWritingsViews(
  writings: { slug: string }[] | undefined
): Promise<Record<string, number>> {
  noStore();
  const viewsArray = await redis.mget<number[]>(
    writings?.map((w) => ['pageviews', 'projects', w.slug].join(':')) || []
  );

  const allWritingsViews = viewsArray.reduce(
    (acc, v, i) => {
      const currentSlug = writings?.[i]?.slug;
      if (currentSlug) {
        acc[currentSlug] = v ?? 0;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  return allWritingsViews;
}
