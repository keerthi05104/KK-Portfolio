function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-main">
        <div className="hero-label">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <h1>
          I build digital
          <br />
          <span>experiences that matter.</span>
        </h1>

        <p className="hero-description">
          I'm Keerthi K, a developer focused on building
          modern, responsive web applications with clean
          interfaces and practical functionality.
        </p>

        <div className="hero-actions">

          <a href="#contact" className="button button-dark">
            Start a conversation
            <span>↗</span>
          </a>

          <a href="#about" className="button button-outline">
            Explore my work
            <span>↓</span>
          </a>

        </div>

      </div>


      <div className="hero-bottom">

        <div>
          <span>BASED IN</span>
          <strong>Udupi,India</strong>
        </div>

        <div>
          <span>FOCUS</span>
          <strong>Web Development</strong>
        </div>

        <div>
          <span>STACK</span>
          <strong>MERN</strong>
        </div>

      </div>

    </section>
  );
}

export default Home;