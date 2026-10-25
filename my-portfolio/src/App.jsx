
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./pages/Projects";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
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

                  <p>© 2026 KEERTHI K</p>

                  <a href="#home">Back to top ↑</a>
                </footer>
              </>
            }
          />

          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
