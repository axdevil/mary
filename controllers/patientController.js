const con = require('../config/connection')
const patientModel = require('../models/patientModel')

module.exports = {
    index:function(req,res){
        res.render('patient/login')
    },
    signUp:function(req,res){
        res.render('patient/signUp')
    }
}