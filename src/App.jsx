import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { NewProject } from "./pages/NewProject";
import { Container } from "./components/layouts/Container";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>COSTS</h1>

        <ul>
          <Link to="/">Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </ul>
      </div>
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
