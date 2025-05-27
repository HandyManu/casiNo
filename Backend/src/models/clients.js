import { Schema,model } from "mongoose";

const ClientsSchema = new Schema({

    nombreCompleto: {
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true,
    },
    paisResidencia: {
        type: String,
        required: true
    }
},{
    timestamps:true,
    strict:false
})

export default model("Clients",ClientsSchema );