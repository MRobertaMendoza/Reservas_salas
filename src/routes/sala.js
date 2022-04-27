const express = require("express");

const router = express.Router();//creo un enrutador

const salSchema = require("../models/sala"); //llamo model schema

//create salas
router.post("/salas", (req, res) => {
    const salas = salSchema(req.body);
    salas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//get all salas
router.get("/salas", (req, res) => {    
    salSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
         
});

//get solo una sala
router.get("/salas/:id", (req, res) => { 
    const {id} = req.params;   
    salSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//update a salas
router.put("/salas/:id", (req, res) => { 
    const {id} = req.params;  
    const {nombre, descripcion} = req.body;
    salSchema
        .updateOne({_id: id}, {$set: {nombre, descripcion} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//delete a salas
router.delete("/salas/:id", (req, res) => { 
    const {id} = req.params;  
    salSchema
        .remove({ _id: id}) //se cambia el .remove por Node Warning
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

module.exports = router;
