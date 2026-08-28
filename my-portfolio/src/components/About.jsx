function About() {
  return (
    <section id="about" className="section">

      <div className="section-heading">

        <span className="section-index">
          01
        </span>

        <div>
          <p className="section-eyebrow">
            ABOUT ME
          </p>

          <h2>
            Building with curiosity,
            <br />
            purpose and precision.
          </h2>
        </div>

      </div>


      <div className="about-layout">

        <div className="about-main">

          <p className="lead">
            I'm a developer interested in turning ideas
            into useful digital products.
          </p>

          <p>
            I enjoy understanding how a product works,
            designing clear interfaces, and writing code
            that is practical and maintainable.
          </p>

          <p>
            My current journey is focused on strengthening
            my skills in frontend development while learning
            backend technologies and building full-stack
            applications.
          </p>

        </div>


        <aside className="about-details">

          <div className="detail">
            <span>EDUCATION</span>

            <strong>
              Your Degree
            </strong>

            <p>
               Bachelor of Engineering
              <br />
              2024 — 2028
            </p>
          </div>

          <div className="detail">
            <span>LOCATION</span>

            <strong>
              Mangaloore
            </strong>

            <p>
              India
            </p>
          </div>

          <div className="detail">
            <span>CURRENTLY</span>

            <strong>
              Learning & Building
            </strong>

            <p>
              Full-stack development
            </p>
          </div>

        </aside>

      </div>

    </section>
  );
}

export default About;