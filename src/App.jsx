import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import Passwords from "./pages/Passwords";
import PrivateRouter from "./components/PrivateRouter";
import { useRecoilValue } from "recoil";
import { isUserAuthenticatedAtom } from "./states/atoms";

function App() {
  const isUserAuthenticated = useRecoilValue(isUserAuthenticatedAtom);
  return (
    <Container fluid className="p-0 h-100">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route
            path="passwords"
            element={
              <PrivateRouter isUserAuthenticated={isUserAuthenticated}>
                <Passwords />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
