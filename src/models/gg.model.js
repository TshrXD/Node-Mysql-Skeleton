'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Gg = function(gg){
    this.name = gg.name;
};
Gg.create = function (newEmp, result) {
    dbConn.query("INSERT INTO gg set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Gg.findById = function (id, result) {
    dbConn.query("Select * from gg where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Gg.findAll = function (result) {
    dbConn.query("Select * from gg", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Gg.update = function(id, gg, result){
    dbConn.query("UPDATE gg SET name=? WHERE id = ?", [gg.name,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Gg.delete = function(id, result){
    dbConn.query("DELETE FROM gg WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Gg;