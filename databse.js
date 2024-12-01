const {createPool} = require('mysql2');


const pool = createPool({
    host :"localhost",
    user :'root',
    password:"sagarmatha@28" ,
    database:"nodeproject02",
    connectionLimit:20
})


pool.query(`select * from employeetable`, (err,result,fields)=>{
    if(err){
        return console.log(err);
    } 
    return console.log(result);
})

module.exports= pool;