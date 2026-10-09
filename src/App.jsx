
import React from "react";
import Hero from "./components/Hero.jsx";
import NetflixPreloader from "./components/NetflixPreloader.jsx";

export default function App() {
  return (
    <>
      <NetflixPreloader />
      <main>
        <Hero />

        <section id="about" className="section">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Teaching with purpose.</h2>
          <p>
            I am Sayeedur Rahman (Shahid Sir), a teacher and educational
            content creator at EZEE VISION CHAMPUA.
          </p>
          <p>
            I help students in Classes 4–10 learn SST, English, Science
            and Mathematics through clear explanations, worksheets and
            handwritten notes.
          </p>
        </section>

        <section id="expertise" className="section">
          <p className="eyebrow">WHAT I TEACH</p>
          <h2>Knowledge made clearer.</h2>
          <div className="cards">
            {["Social Science", "English", "Science", "Mathematics"].map(
              (subject) => (
                <article className="card" key={subject}>
                  <h3>{subject}</h3>
                  <p>Learning resources and student-focused explanations.</p>
                </article>
              )
            )}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Resources that help students grow.</h2>
          <div className="cards">
            {[
              ["Worksheets", "Practice material designed for students."],
              ["Handwritten Notes", "Organised notes for easier revision."],
              ["Educational Apps", "AI-assisted tools for learning."]
            ].map(([title, description]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section">
          <p className="eyebrow">TESTIMONIALS</p>
          <h2>Student feedback</h2>
          <p>Testimonials — Soon Publishing.</p>
        </section>

        <section id="contact" className="section">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let’s make learning better.</h2>
          <p>For educational collaboration and learning resources, get in touch.</p>
          <a href="mailto:sayeed@example.com">Contact me by email</a>
        </section>

        <footer className="footer">
          <p>Made With ❤️ By Shahid Sir</p>
        </footer>
      </main>
    </>
  );
}
