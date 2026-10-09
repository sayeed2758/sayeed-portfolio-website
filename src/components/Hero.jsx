import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Expertise", href: "#expertise" },
  { label: "My Work", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const audioRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioMessage, setAudioMessage] = useState(
    "Voice introduction will be added soon"
  );

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setAudioMessage("Playing my introduction...");
      } catch {
        setAudioMessage("Voice introduction will be added soon");
      }
    } else {
      audio.pause();
      setAudioMessage("Paused · Tap to resume");
    }
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img src="/shahid-sir.png" alt="Shahid Sir" />
          <span>
            <strong>SAYEED</strong>
            <small>TEACHER · CREATOR</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a className="nav-connect" href="#contact" onClick={closeMenu}>
            Connect ↗
          </a>
        </nav>

        <a className="desktop-connect" href="#contact">
          Connect ↗
        </a>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">TEACHING · CREATIVITY · TECHNOLOGY</p>

          <p className="hero-greeting">HELLO, I'M SHAHID SIR</p>

          <h1>
            Inspiring minds.
            <br />
            <span>Shaping futures.</span>
          </h1>

          <p className="hero-description">
            I'm Sayeedur Rahman, a teacher and educational content
            creator passionate about making learning clearer,
            meaningful and accessible for every student.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore My Work ↗
            </a>
            <a className="text-button" href="#about">
              My Story ↓
            </a>
          </div>

          <div className="hero-stats">
            <span>02 YEARS EXPERIENCE</span>
            <span>CLASSES 4–10</span>
          </div>
        </div>

        <div className="hero-profile">
          <div className="profile-image-wrap">
            <img
              src="/shahid-sir.png"
              alt="Sayeedur Rahman (Shahid Sir), teacher and educational content creator"
              className="profile-image"
            />
            <span className="image-label">EDUCATOR · INDIA</span>

            <div className="profile-caption">
              <p>TEACHER &amp; EDUCATIONAL CONTENT CREATOR</p>
              <h2>Sayeedur Rahman</h2>
              <span>Shahid Sir</span>
            </div>
          </div>

          <div className="voice-card">
            <div className="voice-icon">♫</div>
            <div className="voice-copy">
              <strong>Hear My Story</strong>
              <p>{audioMessage}</p>
            </div>
            <button
              type="button"
              className="audio-button"
              onClick={toggleAudio}
              aria-label="Play or pause voice introduction"
            >
              ▶
            </button>
            <audio
              ref={audioRef}
              src="/sayeed-intro.mp3"
              onEnded={() =>
                setAudioMessage("Introduction finished · Play again")
              }
              onError={() =>
                setAudioMessage("Voice introduction will be added soon")
              }
            />
          </div>
        </div>
      </section>

      <div className="hero-bottom">
        <span>EDUCATION WITH PURPOSE</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </div>
    </>
  );
}
