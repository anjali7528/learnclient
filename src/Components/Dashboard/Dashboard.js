import React from 'react'
import {Link} from 'react-router-dom';
import {Card, CardGroup} from 'react-bootstrap';
import {MdOutlineAddCircleOutline} from "react-icons/md";
const Dashboard = () => {
  return (
    <div>
    <CardGroup>

  <Card style={{margin:'10%',borderRadius:'10px',cursor:'pointer'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80" />
    <Card.Body>
      <Card.Title><Link to="/teacher/addCourse"><MdOutlineAddCircleOutline/> Add Course </Link></Card.Title>
      
    </Card.Body>
  </Card>
  
  <Card style={{margin:'10%',borderRadius:'10px',cursor:'pointer'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80" />
    <Card.Body>
      <Card.Title><Link to="/teacher/makeQuiz"><MdOutlineAddCircleOutline/> Add Quiz</Link></Card.Title>
    </Card.Body>
  </Card>
</CardGroup></div>
  )
}

export default Dashboard