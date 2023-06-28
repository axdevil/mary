const mysql = require("mysql")
const global = require('../config/global')

const con = mysql.createConnection({
    host: global.host,
    user: global.user,
    password: global.password,
    database: global.database
})

con.connect(
    (err) => {
        if(err) throw err
        console.log("Conexion correcta a base de datos");
    }
)

module.exports = con