import React,{useState,useEffect} from 'react'
import {Form,Row,Col,Dropdown,Button} from 'react-bootstrap';
import axios from 'axios';

const QuizCourse = (props) => {

    const [courses,setCourses] = useState([]);
    const [pmarks,setPmarks] = useState(0);
    const [course, setCourse] = useState("");

    useEffect(() => {
        const fetchCourses = async ()=>{
          const res = await axios.get("/course")
          setCourses(res.data)
        }
        fetchCourses()
      }, [])
    
      

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("hello")
        const newDetail = {
       marks: pmarks,
       course: course
        }
        props.setDetails(() => {
          return [newDetail]
        })

    // props.setDetails({pmarks,course})
     
    }

  return (
    <div>
        <div style={{margin:'5% 10% 0% 20%'}}>
       <Form onSubmit={handleSubmit}>
       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
       <select onChange={(e)=>setCourse(e.target.value)}> 
      <option value="Select a quiz"> -- Select a Quiz -- </option>
      {courses.map((quiz) => <option value={quiz.name}>{quiz.name}</option>)}
    </select>
</Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Passing Marks 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Add Passing Marks"  onChange={e=>setPmarks(e.target.value)} />
    </Col>
  </Form.Group>

 
  <Button variant="primary" type="submit" style={{cursor:'pointer'}}>
    Continue to add Questions
  </Button>

  </Form>
    </div>
</div>
  )}

export default QuizCourse