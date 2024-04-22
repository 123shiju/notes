const pool=require('../db')


const addText=(req,res) =>{
    const title ="default title"
    const { content }  =req.body
    console.log("content",content)

    const created_at=new Date();
    pool.query('INSERT INTO texts (title,content,created_at) VALUES (?,?,?) ',[title,content,created_at], (err,result)=>{
        if(err){
            console.error('Error inserting user:' ,err.message);
            return res.status(500).json({error:'error inserting text'})
        }
        console.log("backend responded")
        return res.status(201).json({message:'Text inserted successfully'})
        
    })
}

const DeleteText =(req,res) =>{
    const id = req.query.id
    console.log(id)
    pool.query('DELETE FROM texts WHERE id= ? ',[id],(err,results,fields)=>{
        if(err){
            throw err
        }
        return res.status(201).json({message:'deleted successfully'})
    })
}

module.exports ={
    addText,
    DeleteText
}