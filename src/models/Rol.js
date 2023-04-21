const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const rolSchema = new mongoose.Schema({
  idRol: {
    type: Number,
    unique: true
  },
  nombre:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  description:{
    type:String,
    required:true,
    unique:true,
    trim:true
  }
});

// rolSchema.plugin(autoIncrement.plugin, {
//   model: 'Modelo',
//   field: 'idRol',
//   startAt: 1,
//   incrementBy: 1
// });

export default model('Modelo', rolSchema);


