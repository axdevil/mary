module.exports = {
    insert:function(con,data,fun){
        con.query('INSERT INTO patient VALUES(NULL,?,?,?,?,NULL,?,NULL,NULL,NULL,NULL)',[data.email,data.password,data.name,data.lastname,data.gender],fun)
    },
    searchByEmail:function(con,email,fun){
        con.query('SELECT email FROM patient WHERE email=?',[email],fun)
    }
}