 import React,{useState} from 'react'
 import './note.css'
 import axios from 'axios'
 
 const Note = () => {
  const [content,setContent]=useState("")
  console.log(content)
  const handlechange =(e) =>{
    e.preventDefault()
    setContent(e.target.value)

  }

  const handleaddText = async () =>{
    try {
      const response= await axios.post('http://localhost:5000/api/add',{content})
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
   return (
     <div  className='container' >
      <div className='TextField'>
        <input  type='text' placeholder='Take a note ...' onChange={handlechange} value={content} />
        <button onClick={handleaddText}>ADD</button>
        {content}
      </div>
     </div>
   )
 }
 
 export default Note