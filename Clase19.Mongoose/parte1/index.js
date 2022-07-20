import mongoose from "mongoose";
import User from "./models/user.js";

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/mibasedos");

  console.log("Conexion establecida con la db");

  const user = {
    nombre: "Juana",
    apellido: "Martinez",
    email: "jjm@gmail.com",
    password: 123,
    usuario: "juana",
  };
  //const juanaModel = new User(user)

  //await juanaModel.save()

  console.log("Juana guardada en la DB");

  const users = [
    {
      nombre: "Juan",
      apellido: "Martinez",
      email: "jum@gmail.com",
      password: 456,
      usuario: "juan",
    },
    {
      nombre: "Lucia",
      apellido: "Perez",
      email: "lp@gmail.com",
      password: 456,
      usuario: "luci",
    },
    {
      nombre: "Martina",
      apellido: "Perez",
      email: "mp@gmail.com",
      password: 789,
      usuario: "marti",
    },
    {
      nombre: "Roberto",
      apellido: "Dimitri",
      email: "rd@gmail.com",
      password: 789,
      usuario: "rober",
    },
  ];

  //await User.insertMany(users)

  console.log("Usuarios insertados");

  const filteredUsers = await User.find({
    $and: [{ apellido: "Perez" }, { password: { $gt: 123 } }],
  }, {__v: 0, _id: 0}).limit(1).skip(1);

  const oneUser = await User.findById('62d739b060e0bddbbc75f8b2')

  console.log('filteredUsers', filteredUsers)
  console.log('oneUser', oneUser)

  const updatedRober = await User.updateOne({nombre: 'Roberto'}, {
    $set: { password: 123 }
  })
  const newRober = await User.findById('62d739b060e0bddbbc75f8b2')

  console.log('updatedRober', updatedRober)
  console.log('newRober', newRober)

  await User.updateOne({email: 'jum@gmail.com'}, {$set: {password: 789, __v: 1}})
  await User.deleteOne({_id: '62d739b060e0bddbbc75f8b2'})
  const allUsers = await User.find().sort({nombre: 1})

  console.log('allUsers', allUsers)


};

main();
