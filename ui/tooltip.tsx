import clsx from 'clsx';
import { ReactNode, useState } from 'react';

interface Props {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline">
      <button
        aria-label="tooltip-button"
        className="focus:outline-none focus:shadow-outline"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </button>
      <div
        className={clsx(
          'absolute z-50 bg-secondary text-secondary border border-secondary rounded-lg  py-1 px-2 text-sm focus:outline-none transition-opacity duration-200 delay-150',
          {
            'opacity-100': showTooltip,
            'opacity-0': !showTooltip
          }
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
