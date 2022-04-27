//const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const salSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('Sala', salSchema);
