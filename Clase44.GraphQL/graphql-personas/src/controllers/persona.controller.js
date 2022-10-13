import crypto from "crypto";
import Persona from "../classes/persona.class.js";

const personasMap = {};

const createPersona = ({ datos }) => {
  const id = crypto.randomBytes(10).toString("hex");
  const nuevaPersona = new Persona(id, datos);

  personasMap[id] = nuevaPersona;

  return nuevaPersona;
};

const getPersona = ({ id }) => {
  if (!personasMap[id]) throw new Error("Persona no existe");

  return personasMap[id];
};

const getPersonas = ({ campo, valor }) => {
  const personas = Object.values(personasMap);

  if (campo && valor) {
    return personas.filter((persona) => persona[campo] == valor);
  } else {
    return personas;
  }
};

const updatePersona = ({ id, datos }) => {
  if (!personasMap[id]) throw new Error("Persona no existe");

  const personaActualizada = new Persona(id, datos);

  personasMap[id] = personaActualizada;

  return personaActualizada;
};

const deletePersona = ({ id }) => {
  if (!personasMap[id]) throw new Error("Persona no existe");

  const personaBorrada = personasMap[id];

  delete personasMap[id];

  return personaBorrada;
};

export default {
  createPersona,
  getPersona,
  getPersonas,
  updatePersona,
  deletePersona,
};
