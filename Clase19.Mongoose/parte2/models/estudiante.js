import mongoose from 'mongoose'

const estudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, unique: true, required: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
    ingreso: { type: Boolean, required: true, default: false, },
})

const Estudiante = mongoose.model('estudiante', estudianteSchema)

export default Estudiante