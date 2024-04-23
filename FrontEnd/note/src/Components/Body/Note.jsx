import React, { useState } from "react";
import "./note.css";
import axios from "axios";

const Note = () => {
  const [content, setContent] = useState("");
  const [displaycontent, setDisplaycontent] = useState([]);


  const handlechange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };


  const handleaddText = async () => {
    try {
      if (content.trim() !== "") {
        setDisplaycontent([...displaycontent, content]);
        setContent("");
      }

      const response = await axios.post("http://localhost:5000/api/add", {
        content,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleDelete = (index) =>{
    const newdisplaycontent = [...displaycontent]
    newdisplaycontent.splice(index,1)
    setDisplaycontent(newdisplaycontent)
  }
  return (
    <div className="container">
      <div className="TextField">
        <div className="fixedfield">
        <input
          type="text"
          placeholder="Take a note ..."
          onChange={handlechange}
          value={content}
        />
        <button onClick={handleaddText}>ADD</button>
        </div>
      <div className="display">
        {displaycontent.map((value, index) => {
          return (
            <div className="note" key={index}><p>{value}</p>
            <button onClick={()=>{handleDelete(index)}}>Delete</button>
            </div>
          )
        })}
        </div>
        </div>
        </div>
  );
};

export default Note;
