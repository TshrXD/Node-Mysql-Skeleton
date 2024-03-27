'use strict';
const Gg = require('../models/gg.model');
exports.findAll = function(req, res) {
    Gg.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function(req, res) {
    const new_employee = new Gg(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Gg.create(new_employee, function(err, employee) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:employee});
        });
    }
};
exports.findById = function(req, res) {
    Gg.findById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Gg.update(req.params.id, new Gg(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Employee successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Gg.delete( req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Employee successfully deleted' });
    });
};