import React from 'react'
import './Tregister.css'
import Register from '../../Components/Register/Register'
import { Button,Container,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Tregister = () => {
  return (
     <>
    <Container>
      <Row>
      <Col xl={1} sm={11}></Col>
      <Col  xl={12}sm={1}>
      <Button variant="dark" style={{margin:'10px'}}><Link to="/login/teacher">Login</Link></Button>{' '}
      </Col>
      </Row>
    </Container>

  <div className='login'>
      <div className='card'> <Register/></div>
  </div>
  </>
  )
}

export default Tregister