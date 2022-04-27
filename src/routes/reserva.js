const express = require("express");
const router = express.Router();
const reservaSchema = require("../models/reserva");//traigo el modelo reservas

//create reserva
router.post("/reservas", (req, res) => {
    const reservas = reservaSchema(req.body);
    reservas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//get all reservas
router.get("/reservas", (req, res) => {    
    reservaSchema
        .find().populate('sala')
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get solo una reserva
router.get("/reservas/:id", (req, res) => { 
    const {id} = req.params;   
    reservaSchema
        .findById(id).populate('sala')
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//update reservas
router.put("/reservas/:id", (req, res) => { 
    const {id} = req.params;  
    const { fecha,horaInicio, horaFin, responsable, cantidadPersonas, descripcion, sala} = req.body;
    reservaSchema
        .updateOne({ _id: id}, {$set: {fecha,horaInicio, horaFin, responsable, cantidadPersonas, descripcion, sala} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//delete reservas
router.delete("/reservas/:id", (req, res) => { 
    const {id} = req.params;  
    reservaSchema
        .deleteOne({_id: id}) //se cambia el .remove por Node Warning
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//get reservas x salas
router.get("/reservas/sala/:id", (req, res) => { 
    const {id} = req.params;   
    reservaSchema
        .find({sala : id}).populate('sala')
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

module.exports = router;
