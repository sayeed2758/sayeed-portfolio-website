import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioMessage, setAudioMessage] = useState(
    'Personal introduction · Coming soon'
  );
  const [audioAvailable, setAudioAvailable] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setAudioMessage('Playing my introduction...');
    };

    const handlePause = () => {
      setIsPlaying(false);

      if (audio.currentTime > 0 && !audio.ended) {
        setAudioMessage('Paused · Tap to resume');
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setAudioMessage('Introduction finished · Play again');
    };

    const handleCanPlay = () => {
      setAudioAvailable(true);
      setAudioMessage('Listen to my introduction');
    };

    const handleError = () => {
      setAudioAvailable(false);
      setIsPlaying(false);
      setAudioMessage('Voice introduction will be added soon');
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audioAvailable) {
      setAudioMessage('Voice introduction will be added soon');
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setAudioMessage('Unable to play audio. Please try again.');
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#10100f] text-[#f4f2ec]"
    >
      {/* Subtle gold lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 78% 42%, rgba(196,164,107,0.13), transparent 38%)',
        }}
      />

      {/* Navigation */}
      <header className="relative z-20 border-b border-white/10">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10"
          aria-label="Main navigation"
        >
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/shahid-sir.png"
              alt=""
              className="h-12 w-12 rounded-full border border-[#c4a46b] object-cover object-top"
            />

            <span className="flex flex-col leading-tight">
              <strong className="font-bold tracking-[0.18em]">
                SAYEED
              </strong>
              <span className="mt-1 text-[9px] tracking-[0.16em] text-white/55">
                TEACHER · CREATOR
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-xs text-white/70 md:flex">
            <a className="transition hover:text-[#e1c993]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#e1c993]" href="#teaching">
              Teaching
            </a>
            <a className="transition hover:text-[#e1c993]" href="#projects">
              My Work
            </a>
            <a
              className="border border-[#c4a46b] px-4 py-2 text-[#e1c993] transition hover:bg-[#c4a46b] hover:text-black"
              href="#contact"
            >
              Contact ↗
            </a>
          </div>

          <a
            href="#contact"
            className="border border-white/20 px-3 py-2 text-xs md:hidden"
          >
            Connect ↗
          </a>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:px-10 md:py-20 lg:gap-20">
        <div>
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#e1c993]">
            <span className="h-px w-8 bg-[#c4a46b]" />
            TEACHING · CREATIVITY · TECHNOLOGY
          </p>

          <p className="mb-4 text-xs font-medium tracking-[0.16em] text-white/60">
            HELLO, I'M SHAHID SIR
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Inspiring minds.
            <span className="mt-2 block text-[#c4a46b]">
              Shaping futures.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            I'm Sayeedur Rahman, a teacher and educational content
            creator passionate about making learning clearer,
            meaningful and accessible for every student.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-3 bg-[#c4a46b] px-5 py-3 text-sm font-semibold text-[#10100f] transition hover:bg-[#e1c993]"
            >
              Explore My Work <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 items-center gap-2 text-sm text-white/80 transition hover:text-[#e1c993]"
            >
              My Story <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[10px] tracking-[0.13em] text-white/50">
            <span>02 YEARS EXPERIENCE</span>
            <span className="hidden h-4 w-px bg-[#c4a46b] sm:block" />
            <span>CLASSES 4–10</span>
          </div>
        </div>

        {/* Portrait and voice player */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden border border-[#c4a46b]/50 bg-[#191918] p-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#191918]">
              <img
                src="/shahid-sir.png"
                alt="Portrait of Sayeedur Rahman, known as Shahid Sir"
                className="absolute inset-0 h-full w-full object-cover object-top"
                fetchPriority="high"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,10,9,0.96), rgba(10,10,9,0.08) 52%, rgba(10,10,9,0.04))',
                }}
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="mb-2 text-[9px] tracking-[0.2em] text-[#e1c993]">
                  TEACHER & EDUCATIONAL CONTENT CREATOR
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Sayeedur Rahman
                </h2>

                <p className="mt-1 text-sm text-white/65">Shahid Sir</p>
              </div>

              <span className="absolute left-4 top-4 border border-white/25 bg-black/35 px-3 py-1.5 text-[9px] tracking-[0.15em] backdrop-blur-sm">
                EDUCATOR · INDIA
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4">
            <div
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center border border-[#c4a46b]/50 text-lg text-[#e1c993]"
            >
              ♫
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">Hear My Story</p>
              <p
                aria-live="polite"
                className="mt-1 text-[10px] leading-5 text-white/50"
              >
                {audioMessage}
              </p>
            </div>

            <button
              type="button"
              onClick={toggleAudio}
              aria-label={
                isPlaying ? 'Pause introduction' : 'Play introduction'
              }
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#c4a46b] text-sm text-[#e1c993] transition hover:bg-[#c4a46b] hover:text-black"
            >
              {isPlaying ? 'Ⅱ' : '▶'}
            </button>

            <audio
              ref={audioRef}
              src="/sayeed-intro.mp3"
              preload="metadata"
            />
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-[9px] tracking-[0.14em] text-white/40 md:px-10">
        <span>EDUCATION WITH PURPOSE</span>
        <a
          href="#about"
          className="transition hover:text-[#e1c993]"
        >
          SCROLL TO EXPLORE ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;

