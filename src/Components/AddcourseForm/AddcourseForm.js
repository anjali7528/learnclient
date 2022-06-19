import React, { useContext, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import './addcourseform.css'
import Courses from '../Courses/Courses'
import { Context } from '../../context/Context'
import axios from 'axios';

const AddcourseForm = () => {

  const [course, setCourse] = useState("");
  const [courses,setCourses] = useState([]);

  const {user} = useContext(Context);

  useEffect(() => {
    const fetchCourses = async ()=>{
      const res = await axios.get("https://learnplus.herokuapp.com/api/course")
      setCourses(res.data)
      console.log(res)
    }
    fetchCourses()
  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCourse = {
      username:user.username,
      name : course
    }
    
    try{
    const res = await axios.post("https://learnplus.herokuapp.com/api/course",newCourse);
    window.location.replace("/teacher/addCourse");
    console.log(res);
    }catch(err){

    }
  };

  return (
    <div style={{margin:'5% 10% 0% 20%'}}>
        <form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Course" onChange={e=>setCourse(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" style={{cursor:'pointer'}}>
    Add
  </Button>
  </form>
   <div>
    <Courses courses={courses} />
   </div>

    </div>
  )
}

export default AddcourseForm