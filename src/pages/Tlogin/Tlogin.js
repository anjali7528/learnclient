import React from 'react'
import Login from '../../Components/Login/Login'
import './Tlogin.css'
import { Button,Container,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Tlogin = () => {
  return (
    <>
    <Container>
      <Row>
      <Col xl={1} sm={11}></Col>
      <Col  xl={12}sm={1}>
      <Button variant="dark" style={{margin:'10px'}}><Link to="/register/teacher">Register</Link></Button>{' '}
      </Col>
      </Row>
    </Container>

    <div className='login'>
        <div clasName='card'> <Login/></div>
    </div>
    </>
  )
}

export default Tlogin;