import mongoose from "mongoose";
import User from './models/user.js'

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://salva:salva123@cluster0.8jckg.mongodb.net/mibase?retryWrites=true&w=majority"
  );
  console.log('Conexion establecida!')

  const users = await User.find()

  console.log(users)
};

main();
