import dotenv from "dotenv";
import { createTransport } from "nodemailer";

dotenv.config();

const TEST_MAIL = "salvaxelement@gmail.com";
const message = process.argv[2];
const subject = process.argv[3];
const toMail = process.argv[4];
const file = process.argv[5];

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: process.env.PASS,
  },
});

const mailOptions = {
  from: "Server Node.js",
  to: toMail,
  subject,
  html: message,
};

if (file) {
  mailOptions.attachments = [
    {
      path: new URL(`./${file}`, import.meta.url).pathname,
    },
  ];
}

try {
  const info = await transporter.sendMail(mailOptions);

  console.log(info);
} catch (error) {
  console.log(error);
}
