import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true, max: 100 },
    apellido: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true, max: 100 },
    usuario: { type: String, required: true, unique: true, max: 100 },
    password: { type: Number, required: true }
})

const User = mongoose.model('user', userSchema)

export default User