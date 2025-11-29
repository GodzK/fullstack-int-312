const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    host : process.env.ENV_HOST ,
    port : process.env.ENV_PORT ,
    user : process.env.ENV_USER ,
    password : process.env.ENV_PASSWORD,
    database : process.env.ENV_DATABASE ,
    waitForConnections : true,
    connectionLimit : 10 ,
    queueLimit : 0 ,

})


module.exports = pool;