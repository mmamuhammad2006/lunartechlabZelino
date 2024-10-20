const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");

router.post(
  "/send-mail",
  [
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("subject").isString().notEmpty().withMessage("Subject is required"),
    body("message").isString().notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.render("pages/contactUS", { title: "Conctact Us" });
    }
    console.log("Email sent successfully");
    // const { name, email, message } = req.body;

    const { name } = req.body;
    const { email } = req.body;
    const { subject } = req.body;
    const { message } = req.body;
    console.log(name, email, subject, message);

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "delta57@ethereal.email",
        pass: "9Qa7bAhJP49WWbD8gq",
      },
    });

    // async..await is not allowed in global scope, must use a wrapper
    // async function main() {
      const msg = {
        from: `"Name: "${name} ",  Email: "${email}`, // sender address
        to: "wwamalok@gmail.com", // list of receivers
        subject: `${subject}`, // Subject line
        text: `${message}`, // plain text body
      };

      try {
        // send mail with defined transport object
        const info = await transporter.sendMail(msg);

        console.log("Message sent: %s", info.messageId);
        res.render("pages/contactUS", { title: "Conctact Us" });

        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send(error);
      }
    // }

    // main().catch(console.error); // This shows emails on
  }
);

module.exports = router;
