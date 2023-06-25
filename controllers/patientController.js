const con = require('../config/connection')
const patientModel = require('../models/patientModel')

module.exports = {
    index:function(req,res){
        res.render('patient/login',{email: ""})
    },
    signUp:function(req,res){
        res.render('patient/signUp',{body: [],backError: ""})
    },
    validateSignUp:function(req,res){
        const body = req.body
        patientModel.searchByEmail(con,body.email,function(err,data){
            if(err) throw err
            if(data.length >= 1){
                res.render('patient/signUp',{body:body,backError: "Ya existe un usuario con ese correo"})
            }else{
                patientModel.insert(con,body,function(err){
                    if(err) throw err
                    res.render('patient/login',{email: body.email})
                })
            }
        })
    }
}