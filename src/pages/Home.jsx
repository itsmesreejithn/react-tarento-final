import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container fluid className="p-0 h-100">
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default Home;
