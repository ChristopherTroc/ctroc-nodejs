//Get model
var logs_model = require('../models/logs_model');

var express = require('express');
var logs_route = express.Router();

//get all logs route funtion
logs_route.get('/',function(req,res){
    logs_model.getLogs(function(error,data){
        res.render('logs', { logs:data });
    });
});

module.exports = logs_route;
