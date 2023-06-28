const con = require('../config/connection')
const patientModel = require('../models/patientModel')

module.exports = {
    index:function(req,res){
        req.session.user = null
        res.render('patient/login',{email: null, backError: null})
    },
    signUp:function(req,res){
        req.session.user = null
        res.render('patient/signUp',{body: [],backError: null})
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
                    res.render('patient/login',{email: body.email, backError: null})
                })
            }
        })
    },
    login:function(req,res){
        const body = req.body
        patientModel.searchByEmailAndPass(con,body,function(err,data){
            if(err) throw err
            if(data.length == 1){
                req.session.user = data[0].id
                res.redirect('/')
            }else{
                res.render('patient/login',{email: body.email,backError: "Contraseña o correo incorrecto"})
            }
        })
    }
}