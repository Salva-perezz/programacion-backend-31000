import twilio from "twilio";

const accountSid = "AC6fcf3c8785d9518903f0dc25179c651a";
const authToken = "08e9aaaef82e71b54135df9e7ff83a69";
const toNumber = process.argv[2];
const body = process.argv[3];

const client = twilio(accountSid, authToken);

const option = {
  body,
  mediaUrl: [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-3miGETYWTJk%2FTVmYYFoSlLI%2FAAAAAAAAABo%2FCbbdS51k2Bo%2Fs1600%2Fgatito.jpg&f=1&nofb=1",
  ],
  from: "whatsapp:+14155238886",
  to: `whatsapp:${toNumber}`,
};

try {
  for (let i = 0; i < 10; i++) {
    const message = await client.messages.create(option);

    console.log(message);
  }
} catch (error) {
  console.log(error);
}
