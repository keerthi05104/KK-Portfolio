function Skills() {
  const skills = [
    {
      number: "01",
      name: "HTML / CSS",
      description:
        "Creating structured, responsive and accessible interfaces."
    },
    {
      number: "02",
      name: "JavaScript",
     
    },
    {
      number: "03",
      name: "React",
      description:
        "Developing modern component-based user interfaces."
    },
    {
      number: "04",
      name: "Node.js",
      description:
        "Learning server-side development and API architecture."
    },
    {
      number: "05",
      name: "MongoDB",
      description:
        "Working with document-based data and database-driven applications."
    }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">

        <span className="section-index">
          02
        </span>

        <div>
          <p className="section-eyebrow">
            SKILLS & TECHNOLOGIES
          </p>

          <h2>
            The tools behind
            <br />
            what I build.
          </h2>
        </div>

      </div>


      <div className="skills-list">

        {skills.map((skill) => (
          <article className="skill-row" key={skill.number}>

            <span className="skill-number">
              {skill.number}
            </span>

            <h3>
              {skill.name}
            </h3>

            <p>
              {skill.description}
            </p>

            <span className="skill-arrow">
              ↗
            </span>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Skills;