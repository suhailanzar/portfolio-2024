import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fitnesss.jpeg";
import projImg2 from "../assets/img/watches ecommerce.jpeg";
import projImg3 from "../assets/img/chatapp.jpeg";
import projImg4 from "../assets/img/cms.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Fitness Application",
      description:
        "A full-stack fitness application using Angular, Node.js, MongoDB, and Clean Architecture with modules for Admin, User, and Trainer.",
      imgUrl: projImg1,
    },
    {
      title: "E-commerce Mini Project",
      description:
        "A Node.js-based mini e-commerce platform featuring essential cart and product listing functionalities.",
      imgUrl: projImg2,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat feature for trainers and users with WebSocket, group messaging, polls, and live typing notifications.",
      imgUrl: projImg3,
    },
    {
      title: "CMS Application (MEAN Stack)",
      description:
        "A CMS project using Angular and NestJS, incorporating user registration, login, article management, and CRUD operations.",
      imgUrl: projImg4, 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="mb-5">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="center-row">
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second"></Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
