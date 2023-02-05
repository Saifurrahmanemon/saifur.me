'use client';
import {
  Alignment,
  Fit,
  Layout,
  RiveState,
  useRive
} from '@rive-app/react-canvas';

function BlogPage() {
  const { RiveComponent }: RiveState = useRive({
    src: '/animations/toggle-theme.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    })
  });
  return (
    <div>
      <RiveComponent className="min-h-[3rem] min-w-[3rem] w-full m-auto" />
      rive
    </div>
  );
}

export default BlogPage;
