import { createTransport } from "nodemailer";

const TEST_MAIL = "rory.lakin1@ethereal.email";
const toMail = process.argv[2];
const subject = process.argv[3];

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "DnmVVR5KT41F8u3BDb",
  },
});

const mailOptions = {
  from: "Servidor Node",
  to: toMail,
  subject,
  html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
};

try {
  const info = await transporter.sendMail(mailOptions);

  console.log(info);
} catch (error) {
  console.log(error);
}
