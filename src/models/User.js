import { Schema, model} from "mongoose"
const autoIncrement = require('mongoose-auto-increment');

const userSchema = new Schema({
  idUser:{
    type:Number,
    unique:true
  },
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
  contrasenia:{
    type:String,
    default:false,
    required:true
  },

},{
  timestamps:true,
  versionKey:false
})

// userSchema.plugin(autoIncrement.plugin, {
//   model: 'Modelo',
//   field: 'idUser',
//   startAt: 1,
//   incrementBy: 1
// });


export default model("User", userSchema)