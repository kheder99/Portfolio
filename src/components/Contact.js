import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import TrackVisibility from 'react-on-screen';

function Contact () {
    const formInitialDetails = {
        user_name: "",
        lastName: '',
        user_email: '',
        phone: '',
        message: '',
    }
    const [formDetails,setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText]  = useState('Send');
    const [status,setStatus] = useState({});
    
    const onFormUpdate = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormDetails({
            ...formDetails,
            [name]: value,
        })
    }

    const form = useRef();
    const sendEmail = (e) => {
        setButtonText('Sending...');
        e.preventDefault();

        emailjs.sendForm("service_nw9gc0s", "template_90h2tkg", form.current,"sr6V59iPQHWjMD2nk")
            .then((result) => {
                console.log(result.text);
                console.log("Message Send Successfully.");
                setButtonText('Send');
                setStatus({success:true, message:"Message Send Successfully."});
                setFormDetails(formInitialDetails);
                setTimeout(()=> {
                    window.scrollTo(0,0);
                },2000)
                
            }, (error) => {
                console.log(error.text);
                setStatus({success:false, message:"Something Wrong, Please Try Later."});
        });
    }
    return ( 
        
        <section className="contact" id="contact">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col> 
                    <Col md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ?"animate__animated animate__bounce":""}>
                                    <h2>Get in touch</h2>
                                </div>}
                        </TrackVisibility>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" name ='user_name' value={formDetails.user_name} onChange={onFormUpdate} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" name ='lastName' value={formDetails.lastName} onChange={onFormUpdate}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="Email Address" name ='user_email' value={formDetails.user_email} onChange={onFormUpdate} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Phone No." name ='phone' value={formDetails.phone} onChange={onFormUpdate}/>
                                </Col>
                                <Col sm={12}>
                                    <textarea rows="6" placeholder="Message..." name ='message' value={formDetails.message} onChange={onFormUpdate} required></textarea>
                                    
                                </Col>
                                <Row>
                                    <Col>
                                        <button type="submit" >
                                            <span>{buttonText}</span>
                                        </button>
                                    </Col>
                                    <Col>
                                        {
                                        status.message && 
                                        <Col>
                                            <p className={status.success===false ?"danger" :"success"}>{status.message}</p>
                                        </Col>
                                        }
                                    </Col>
                                </Row>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
