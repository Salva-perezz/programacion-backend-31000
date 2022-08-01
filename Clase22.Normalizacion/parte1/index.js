import { normalize, schema, denormalize } from "normalizr";
import util from "util";

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true));
}

/*
const blogpost = {
  id: "1",
  title: "My blog post",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: "1",
    name: "John Doe",
  },
  comments: [
    {
      id: "1",
      author: "Rob",
      content: "Nice post!",
    },
    {
      id: "2",
      author: "Jane",
      content: "I totally agree with you!",
    },
  ],
};

const authorSchema = new schema.Entity("author");

const commentSchema = new schema.Entity("comments");

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema],
});

const normalizedPost = normalize(blogpost, postSchema);

console.log("--------- OBJETO NORMALIZADO ------------");
print(normalizedPost);
console.log(JSON.stringify(normalizedPost).length);

console.log("---------- OBJETO ORIGINAL --------------");
console.log(blogpost);
console.log(JSON.stringify(blogpost).length);

console.log("------- OBJETO DENORMALIZADO ---------");
const denormalizedPost = denormalize(
  normalizedPost.result,
  postSchema,
  normalizedPost.entities
);

print(denormalizedPost);
*/

const empresa = {
  id: "1000",
  nombre: "Coderhouse",
  gerente: {
    id: "2",
    nombre: "Pedro",
    apellido: "Mei",
    DNI: "20442639",
    direccion: "CABA 457",
    telefono: "1567811544",
  },
  encargado: {
    id: "3",
    nombre: "Pablo",
    apellido: "Blanco",
    DNI: "20442640",
    direccion: "CABA 458",
    telefono: "1567811545",
  },
  empleados: [
    {
      id: "1",
      nombre: "Nicole",
      apellido: "Gonzalez",
      DNI: "20442638",
      direccion: "CABA 456",
      telefono: "1567811543",
    },
    {
      id: "2",
      nombre: "Pedro",
      apellido: "Mei",
      DNI: "20442639",
      direccion: "CABA 457",
      telefono: "1567811544",
    },
    {
      id: "3",
      nombre: "Pablo",
      apellido: "Blanco",
      DNI: "20442640",
      direccion: "CABA 458",
      telefono: "1567811545",
    },
    {
      id: "4",
      nombre: "Ana",
      apellido: "Rojo",
      DNI: "20442641",
      direccion: "CABA 459",
      telefono: "1567811546",
    },
    {
      id: "5",
      nombre: "Lucia",
      apellido: "Sorbo",
      DNI: "20442642",
      direccion: "CABA 460",
      telefono: "1567811547",
    },
    {
      id: "6",
      nombre: "Jose",
      apellido: "Pieres",
      DNI: "20442643",
      direccion: "CABA 461",
      telefono: "1567811548",
    },
    {
      id: "7",
      nombre: "Maria",
      apellido: "Lopez",
      DNI: "20442644",
      direccion: "CABA 462",
      telefono: "1567811549",
    },
  ],
};

const empleado = new schema.Entity("empleado");

const organigrama = new schema.Entity("organigrama", {
  gerente: empleado,
  encargado: empleado,
  empleados: [empleado],
});

console.log("--------- OBJETO NORMALIZADO ------------");
const normalizedOrganigrama = normalize(empresa, organigrama);
print(normalizedOrganigrama);
console.log(JSON.stringify(normalizedOrganigrama).length);

console.log("---------- OBJETO ORIGINAL --------------");
console.log(empresa);
console.log(JSON.stringify(empresa).length);

console.log("--------- OBJETO DENORMALIZADO ------------");
const denormalizedOrganigrama = denormalize(
  normalizedOrganigrama.result,
  organigrama,
  normalizedOrganigrama.entities
);

console.log(JSON.stringify(denormalizedOrganigrama).length);
