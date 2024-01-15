import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { domain } from '~/lib/user_details';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const interRegular = fetch(
    new URL('../../public/fonts/Inter-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(https://${domain}/og-bg-image.png)`
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap'
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interRegular,
          style: 'normal',
          weight: 500
        }
      ]
    }
  );
}
