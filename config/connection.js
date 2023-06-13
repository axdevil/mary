const mysql = require("mysql")

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mary'
})

con.connect(
    (err) => {
        if(err) throw err
        console.log("Conexion correcta a base de datos");
    }
)

module.exports = con