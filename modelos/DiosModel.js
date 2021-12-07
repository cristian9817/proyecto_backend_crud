import mongoose from 'mongoose'

//Crear un objeto mongo:Schema:
const Schema = mongoose.Schema

//construir un esquema para Dioses:
const DiosSchema = new Schema({

    Dios: {
        type: String,
        required: 'Dios vacio'
    },
    Panteon: {
        type: String,
        required: 'panteon vacio'
    },
    Habilidad_Definitiva:{
        type: String
    },
    Categoria: {
        type: String
    }
})

export default DiosSchema 