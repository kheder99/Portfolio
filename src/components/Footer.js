import {Container,Row,Col } from "react-bootstrap";
import logo from '../assets/img/kheder.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import TrackVisibility from 'react-on-screen';

function Footer () {
    return ( 
        <footer className="footer" id='footer'>
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ?"animate__animated animate__fadeIn" :""}>
                                <img src={logo} alt="logo" />
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href='https://www.linkedin.com/in/kheder-ibrahem-2b6735232' target="_blank"  rel="noreferrer"><img src={navIcon1} alt='' /></a>
                        <a href='https://www.facebook.com/KhederIbrahem99' target="_blank"  rel="noreferrer"><img src={navIcon2} alt='' /></a>
                        <a href='https://www.instagram.com/kheder.y.ibrahem/' target="_blank"  rel="noreferrer"><img src={navIcon3} alt='' /></a>
                        </div>
                        <p>&copy; CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;