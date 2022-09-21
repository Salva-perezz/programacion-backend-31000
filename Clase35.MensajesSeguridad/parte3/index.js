import twilio from "twilio";

const accounSid = "AC6fcf3c8785d9518903f0dc25179c651a";
const authToken = "08e9aaaef82e71b54135df9e7ff83a69";
const message = process.argv[2];
const number = process.argv[3];

const client = twilio(accounSid, authToken);

const options = {
  body: message,
  from: "+16184278182",
  to: number,
};

try {
  const message = await client.messages.create(options);

  console.log(message);
} catch (error) {
  console.log(error);
}
