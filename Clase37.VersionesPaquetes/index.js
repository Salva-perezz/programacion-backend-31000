export const sumar = (n1, n2) => {
  return Number(n1) + Number(n2);
};

export const restar = (n1, n2) => {
  return Number(n1) - Number(n2);
};

export const multiplicar = (n1, n2) => {
  return Number(n1) * Number(n2);
};

export const dividir = (n1, n2) => {
  return Number(n1) / Number(n2);
};

const cookieOptions = {
  domain: "localhost",
};

res.cookie("authToken", token, cookieOptions).send("logeado");
