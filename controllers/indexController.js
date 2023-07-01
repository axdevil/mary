const con = require('../config/connection')

module.exports = {
    index:function(req,res){
        if(!req.session.user){
            res.redirect('/patient')
        }else{
            res.render('index')
        }
    }
}