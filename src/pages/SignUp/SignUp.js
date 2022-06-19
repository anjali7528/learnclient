import React from 'react'
import './signup.css'
import Register from '../../Components/Register/Register'
import { Button,Container,Col,Row,NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
     <div>
    <Container>
      <Row>
      <Col xl={1} sm={11}></Col>
      <Col  xl={12}sm={1}>
      <Button variant="dark" style={{margin:'10px'}}><Link to="/login/student">Login</Link></Button>{' '}
      </Col>
      </Row>
    </Container>

  <div className='login'>
      <div className='card'> <Register/></div>
  </div>
  </div>
  )
}

export default SignUp