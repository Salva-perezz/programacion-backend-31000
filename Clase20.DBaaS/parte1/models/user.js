import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String }
})

const User = mongoose.model('user', userSchema)

export default User