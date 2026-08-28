import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">

      <Header />

      <main>
        <Home />
        <About />
        <Contact />
      </main>

      <footer className="site-footer">

        <div>
          <strong>KEERTHI K</strong>
          <span>Web Developer</span>
        </div>

        <p>
          © 2026 KEERTHI K
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;