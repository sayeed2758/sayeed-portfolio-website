
import { useEffect, useState } from 'react';

const NetflixPreloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#10100f] text-[#f4f2ec]"
      role="status"
      aria-label="Loading Sayeed Portfolio"
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-[#c4a46b] p-1">
          <img
            src="/shahid-sir.png"
            alt=""
            className="h-full w-full rounded-full object-cover object-top"
          />
        </div>

        <p className="text-lg font-semibold tracking-[0.25em]">
          SHAHID SIR
        </p>

        <p className="mt-2 text-[9px] tracking-[0.2em] text-white/50">
          TEACHER · EDUCATIONAL CONTENT CREATOR
        </p>

        <div
          className="mt-7 h-px w-36 overflow-hidden bg-white/10"
          aria-hidden="true"
        >
          <div className="h-full w-full origin-left animate-[loading_1.2s_ease-in-out_forwards] bg-[#c4a46b]" />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default NetflixPreloader;
