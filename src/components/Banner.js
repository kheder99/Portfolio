import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/headerImage2.png";
import { useState, useEffect } from "react";
import "animate.css";

function Banner() {
  const [delta, setDelta] = useState(200);
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "React Developer", "Next Developer"];
  const period = 3000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
    if (isDeleting) {
      setDelta(100);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__bounce">
              <span className="tagline">Welcome to my portfolio</span>
              <h1>
                Hi I'm Kheder <span className="wrap">{text}</span>
              </h1>
              <p>
                My specialties include creating attractive, responsive websites
                that look great on all devices. If you're interested in hiring
                me to create a website for your business or project, please
                don't hesitate to get in touch
              </p>
              <button
                onClick={() => {
                  console.log("connect");
                }}
              >
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
