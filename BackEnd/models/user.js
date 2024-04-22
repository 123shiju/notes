const pool=require('../db')

const User={

    getAll:(callback) =>{
        pool.query('SELECT * FROM texts',(err,result) =>{
            if(err){
                return callback(err,null)
            }
            return callback(null,result)
        })
    },

    getById:(id,callback) =>{
        pool.query('SELECT * FROM texts WHERE id = ?' ,[id],(err,result)=>{
            if(err){
                return callback(err,null)
            }
            if(result.length===0){
                return callback({ message :'Text not found '}, null)
            }
            return callback(null,result[0])
        })
    },

    create:(text,callback) =>{
        pool.query('INSERT INTO texts SET ?' ,text, (err,result)=>{
            if(err){
                return callback(err,null)
            }
            return callback(null,{id :result.insertId , ...text})
        })
    },
}

module.exports =User 