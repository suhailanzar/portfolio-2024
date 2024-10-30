import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/github-brands-solid.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          <Col size={12} sm={6} className="text-center text-sm-end">
            
          </Col>
          <div className="social-icon d-flex justify-content-center p-5">
              <a href="https://www.linkedin.com/in/suhailansar/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/suhailanzar">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <p>Copyright 2022. All Rights Reserved</p>
            </div>
        </Row>
      </Container>
    </footer>
  );
};
