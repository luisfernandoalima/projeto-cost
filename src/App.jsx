import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { NewProject } from "./pages/NewProject";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project/indes";
// Components
import { Container } from "./components/layouts/Container";
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
