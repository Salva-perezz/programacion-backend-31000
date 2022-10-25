await Deno.writeTextFile("test.txt", "Hola desde Deno");

const contenido = await Deno.readTextFile("./test.txt");

console.log(contenido);
