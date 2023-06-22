const con = require('../config/connection')
const patientModel = require('../models/patientModel')

module.exports = {
    index:function(req,res){
        res.render('patient/login')
    },
    signUp:function(req,res){
        res.render('patient/signUp')
    },
    validateSignUp:function(req,res){
        res.render('patient/validate',{name: req.body.name, lastname: req.body.lastname, email: req.body.email})
    }
}