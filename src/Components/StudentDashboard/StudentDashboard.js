import React from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './student.css'
const StudentDashboard = () => {
  return (
    <div className='container'>
    <CardGroup>

  <Card style={{margin:'10px',borderRadius:'10px',cursor:'pointer'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80" />
    <Card.Body>
      <Card.Title> <Link to='/courses'>View Courses</Link></Card.Title>
      
    </Card.Body>
  </Card>
  <Card style={{margin:'10px',borderRadius:'10px',cursor:'pointer'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80" />
    <Card.Body>
      <Card.Title> <Link to='/student/displayQuiz'>View Quiz</Link></Card.Title>
    </Card.Body>
  </Card>
  <Card style={{margin:'10px',borderRadius:'10px',cursor:'pointer'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Title> <Link to='/student/result'>Results</Link></Card.Title>
    </Card.Body>
  </Card>
</CardGroup></div>
  )
}

export default StudentDashboard