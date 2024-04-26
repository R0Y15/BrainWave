import { MouseParallax } from 'react-just-parallax';

export const GradientLight = () => {
  return (
    <MouseParallax isAbsolutelyPositioned>
      <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
    </MouseParallax>
  );
};

