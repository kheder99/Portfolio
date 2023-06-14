import { Navbar , Container, Nav } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import logo from '../assets/img/kheder.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import TrackVisibility from 'react-on-screen';


function NavBar() {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled ,setScrolled] = useState(false);
    const [toggler,setToggler] = useState(false);
    useEffect(()=> {
        const onScroll = () => {
            if(window.scrollY >50) {
                setScrolled(true);
            }else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener('Scroll', onScroll);
    },[]);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    const onToggle = ()=> {
        setToggler(!toggler);
    }
    
    return ( 
        <Navbar expand="lg" className={scrolled||toggler ?"scrolled" :""}>
            <Container>
                <Navbar.Brand href="#home">
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ?"animate__animated animate__fadeIn" :""}>
                            <img src={logo} alt="logo" />
                        </div>
                        }
                    </TrackVisibility>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon' onClick={()=>{onToggle()}}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink ==="home" ?"active navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink ==="skills" ?"active navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink ==="projects" ?"active navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/kheder-ibrahem-2b6735232' target="_blank"  rel="noreferrer"><img src={navIcon1} alt='' /></a>
                        <a href='https://www.facebook.com/KhederIbrahem99' target="_blank"  rel="noreferrer"><img src={navIcon2} alt='' /></a>
                        <a href='https://www.instagram.com/kheder.y.ibrahem/' target="_blank"  rel="noreferrer"><img src={navIcon3} alt='' /></a>
                    </div>
                    <Nav.Link href="#contact"> 
                    <button className="vvd"> <span>Let's Connect </span> </button>
                    </Nav.Link>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );
}

export default NavBar;