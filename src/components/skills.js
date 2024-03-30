import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounce" : ""
                    }
                  >
                    <h2>Skills</h2>
                    {/* As a web developer and Frontend developer i have many skills and thing i can do and experience in many programming languages. */}
                    My passion for technology has led me towards pursuing a
                    career in software development where I can apply my
                    analytical mindset, problem-solving abilities, and attention
                    to detail
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={false}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="error" />
                  <h5>HTML CSS JS TS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="error" />
                  <h5>React Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="error" />
                  <h5>Next Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="error" />
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="error" />
                  <h5>Sass </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="error" />
                  <h5>Tailwind CSS </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="error" />
                  <h5>Material UI </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="error" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="error" />
                  <h5>Effective Communications</h5>
                </div>
              </Carousel>
              <img
                src={colorSharp}
                alt="error"
                className="background-image-left"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
