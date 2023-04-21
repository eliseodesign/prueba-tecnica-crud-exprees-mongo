import { Schema, model} from "mongoose"

const userSchema = new Schema({
  nombre:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  correo:{
    type:String,
    required:true,
  },
  contraseña:{
    type:String,
    default:false,
    required:true
  },

},{
  timestamps:true,
  versionKey:false
})

export default model("User", userSchema)