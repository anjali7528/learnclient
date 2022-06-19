import React, { useContext,useState} from 'react'
import './course.css'
import {Table,ListGroup,Badge} from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa';
import {AiFillDelete} from "react-icons/ai"
import { Context } from '../../context/Context';
import axios from 'axios'

const Course = ({course}) => {
    const {user} = useContext(Context);
    const [name, setName] = useState("");
    const[updateMode,setUpdateMode] = useState(false);

    const handleUpdate = async() =>{
        try{
            await axios.put(`https://learnplus.herokuapp.com/api/course/${course._id}`,{
              username: user.username,
               name,
          });
           setUpdateMode(false);
           window.location.replace("/teacher/addCourse");
           }catch(err){}
    }

    const handleDelete = async() =>{
        try{
            await axios.delete(`https://learnplus.herokuapp.com/api/course/${course._id}`,{
              data: { username: user.username },
          });
            window.location.replace("/teacher/addCourse");
           }catch(err){}
    };

  return (
<>

    <ListGroup as="ol" >
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
        {
          updateMode ? <div><input 
          type="text"
          placeholder={course.name}
          className="singlePostTitleInput" 
          autoFocus
          onChange={(e) => setName(e.target.value)}
          /> < i style={{cursor:"pointer"}} class="fa-solid fa-circle-check"  onClick={handleUpdate}></i></div>:(
            <div className="fw-bold">{course.name}</div>
          )  
        }
     
    </div>
    {course.username === user?.username && (
    <div>
    <Badge bg="dark" pill  style={{marginRight:"10px",cursor:'pointer'}}  onClick = {() =>setUpdateMode(true)}>
    <i className="singlePostIcon fa-solid fa-pen-to-square" style={{cursor:'pointer'}}></i>
    </Badge>
    <Badge bg="dark" pill onClick={handleDelete}>
    <i className="singlePostIcon fa-solid fa-trash-can" style={{cursor:'pointer'}} ></i>
    </Badge>
    </div>
    )}
  </ListGroup.Item>
</ListGroup>
    <div style={{padding:"2px"}}> </div>
       </>
  )
}

export default Course