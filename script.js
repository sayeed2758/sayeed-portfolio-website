
document.documentElement.classList.add("js");

// 1. Mobile navigation
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// 2. Voice introduction: play, pause and resume
const audio = document.querySelector("#intro-audio");
const voiceToggle = document.querySelector("#voice-toggle");
const voiceSymbol = document.querySelector("#voice-symbol");
const voiceStatus = document.querySelector("#voice-status");

if (audio && voiceToggle && voiceSymbol && voiceStatus) {
  audio.addEventListener("play", () => {
    voiceSymbol.textContent = "Ⅱ";
    voiceToggle.setAttribute("aria-label", "Pause introduction");
    voiceStatus.textContent = "Playing introduction...";
  });

  audio.addEventListener("pause", () => {
    voiceSymbol.textContent = "▶";
    voiceToggle.setAttribute("aria-label", "Resume introduction");

    if (audio.currentTime > 0 && !audio.ended) {
      voiceStatus.textContent = "Paused · Tap to resume";
    }
  });

  audio.addEventListener("ended", () => {
    voiceSymbol.textContent = "▶";
    voiceToggle.setAttribute("aria-label", "Play introduction");
    voiceStatus.textContent = "Introduction finished · Play again";
  });

  voiceToggle.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        voiceStatus.textContent =
          "Audio pending: add assets/sayeed-intro.mp3";
        voiceToggle.setAttribute("aria-label", "Play introduction");
        voiceSymbol.textContent = "▶";
      }
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("error", () => {
    voiceStatus.textContent =
      "Audio pending: add assets/sayeed-intro.mp3";
  });
}

// 3. Reveal sections as the visitor scrolls
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

// 4. Keep the footer year current
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
