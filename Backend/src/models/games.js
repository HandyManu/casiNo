import { Schema,model } from "mongoose";

const GamesSchema = new Schema({

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

export default model("Games",GamesSchema );