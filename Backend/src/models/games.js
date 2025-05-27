import { Schema,model } from "mongoose";

const GameSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    apuestaMinima: {
        type: Number,
        required: true
    },
    apuestaMaxima: {
        type: Number,
        required: true
    }
},{
    timestamps:true,
    strict:false
})

export default model("Game",GameSchema );