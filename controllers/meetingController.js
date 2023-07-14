const con = require('../config/connection')

module.exports = {
    new:function(req,res){
        res.render('meeting/new')
    }
}