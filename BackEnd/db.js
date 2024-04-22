const  mysql=require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'mysql@123!@#',
    database:'user'
})

connection.connect((err,connection)=>{
    if(err){
        console.log('error connectiing to database',err);
        return
    }
    console.log('successfully connected to MYSQL database');

})

module.exports = connection;