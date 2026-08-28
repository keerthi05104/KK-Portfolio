function Header() {
  return (
    <header className="site-header">

      <div className="header-inner">

        <a
          href="#home"
          className="site-logo"
        >
          <span className="logo-mark">
            K
          </span>

          <span className="logo-text">
            KEERTHI K
            <small>Web Developer</small>
          </span>
        </a>

        <nav
          className="main-nav"
          aria-label="Main navigation"
        >

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

        <a
          href="#contact"
          className="nav-cta"
        >
          Let's Talk
          <span>↗</span>
        </a>

      </div>

    </header>
  );
}

export default Header;