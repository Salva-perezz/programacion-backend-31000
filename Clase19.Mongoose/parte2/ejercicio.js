import mongoose from "mongoose";
import Estudiante from "./models/estudiante.js";

const sacaPromedrio = (estudiantes) => {
  let total = 0;
  estudiantes.forEach((estudiante) => {
    total += estudiante.nota;
  });

  return total / estudiantes.length;
};

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/colegio");
  console.log("DB Conectada!");
  /*
  INICIO PARTE 1
  const estudiantes = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ]
    
    await Estudiante.insertMany(estudiantes)
    console.log('Estudiantes insertados')
  FIN PARTE 1  
  */

  /*
  INICIO PARTE 2
  const sortedStudents = await Estudiante.find().sort({nombre: 1})
    console.log('sortedStudents', sortedStudents)

    const mostYoung = await Estudiante.find().sort({edad: 1}).limit(1)
    console.log('mostYoung', mostYoung)

    const students2A = await Estudiante.find({curso: '2A'})
    console.log('students2A', students2A)

    const secondMostYoung = await Estudiante.find().sort({edad: 1}).skip(1).limit(1)
    console.log('secondMostYoung', secondMostYoung)

    const students = await Estudiante.find({}, {nombre: 1, apellido: 1, curso: 1, _id: 0}).sort({apellido: -1})
    console.log('students', students)

    const tentStudents = await Estudiante.find({nota: 10})
    console.log('tentStudents 😇', tentStudents)

    console.log('Promedio 🤣', sacaPromedrio(sortedStudents))

    const oneAStudents = await Estudiante.find({curso: '1A'})
    console.log('Promedio 1A 🥳', sacaPromedrio(oneAStudents))
    FIN PARTE 2
    */

  /* INICIO PARTE 3
  await Estudiante.updateOne(
    { nombre: "Lucas", apellido: "Blanco" },
    {
      $set: { dni: "20355875" },
    }
  );
  console.log("DNI de Lucas actualizado");

  await Estudiante.updateMany(
    { curso: "1A" },
    {
      $set: { ingreso: true },
    }
  );

  const aprobedStudents = await Estudiante.find(
    { nota: { $gte: 4 } },
    { _id: 0, __v: 0 }
  );
  console.log("aprobedStudents", aprobedStudents);

  const estudiantesIngresados = await Estudiante.find(
    { ingreso: true },
    { _id: 0, __v: 0 }
  );
  console.log("estudiantesIngresados", estudiantesIngresados);

  await Estudiante.deleteMany({ingreso: true})
  console.log('Estudiantes con ingreso eliminados 🤩')

  const allStudents = await Estudiante.find({}, {__v: 0})
  allStudents.forEach(student => {
    console.log('Estudiante: ', student, 'Timestamp:', student._id.getTimestamp())
  })
  FIN PARTE 3
  */
};

main();
