import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";

function App() {
  return (
    <Container fluid className="p-0 h-100">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
