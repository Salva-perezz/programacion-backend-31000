const envVariable = Deno.env.get("HOME");

console.log("Variable de entorno", envVariable);

const params = Deno.args;

console.log("Argumentos:", params);
