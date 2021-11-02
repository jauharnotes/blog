import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardComp from "./CardComp";

const AboutPage = (props) => {
  return (
    <div>
      <h2>This Abot Page</h2>
      <Container>
        <Row>
          <Col>
            <CardComp
              id="1"
              judul="Belajar ReactJs"
              tanggal="20 Desember 2022"
            />
          </Col>
          <Col>
            <CardComp
              id="2"
              judul="Belajar Golang"
              tanggal="22 Desember 2022"
            />
          </Col>
          <Col>
            <CardComp
              id="3"
              judul="Belajar DevOps"
              tanggal="23 Desember 2022"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
