//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({

  fecha: {
    type: String,
    required: true
  },
  horaInicio: {
      type: Number,
      required: true
    },
  horaFin: {
    type: Number,
    required: true
  },
  responsable: {
    type: String,
    required: true
  },
  cantidadPersonas: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  sala: {
    type : mongoose.Schema.ObjectId, ref: "Sala"
  }
});

module.exports = mongoose.model('Reservas', reservaSchema);
