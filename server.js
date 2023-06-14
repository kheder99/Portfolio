const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: "khkhibib00@gmail.com",
    pass: "habibalbiyatamer"
    },
});

contactEmail.verify((error) => {
    if (error) {
    console.log("hi");
    } else {
    console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
    from: name,
    to: "khkhibib00@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
    if (error) {
        res.json(error);
    } else {
        res.json({ code: 200, status: "Message Sent" });
    }
    });
});


                                   // In Contact Form Page


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response = await fetch("http://localhost:5000/contact",{
    //         method: "POST",
    //         headers: {
    //             "content-type": "Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText('Send');
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if(result.code === 200) {
    //         setStatus({success: true, message: "Message Send Successfully."});
    //     }else {
    //         setStatus({success:false, message:"Something Wrong, Please Try Later."})
    //     }
    // }