import React,{useContext, useRef } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import {Card,Form,FloatingLabel,Button} from 'react-bootstrap'

const Login = () => {
 const emailRef = useRef();
 const passwordRef = useRef();
 const  {dispatch, user} = useContext(Context)

 const handleSubmit = async (e) =>{
  e.preventDefault();
  dispatch({type:"LOGIN_START"})
  try{

    if(window.location.pathname == "/login/student"){
     const res = await axios.post("https://learnplus.herokuapp.com/api/auth/login/student",{
       email: emailRef.current.value,
       password:passwordRef.current.value,
     })
     dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }
    if(window.location.pathname == "/login/teacher"){
      const res = await axios.post("https://learnplus.herokuapp.com/api/auth/login/teacher",{
        email: emailRef.current.value,
        password:passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }
  }catch(err){
    // dispatch({type:"LOGIN_FAILURE"});
  }
}


  return (
    <div style={{textAlign:'center'}}>
    <Card style={{ width: '50vh', border:'1px solid gray', borderRadius:'10px'}} className='sm-12'>
      <Card.Body>
        <Card.Title style={{margin:'10px 0 20px 0'}}>Login</Card.Title>
        <Card.Text>
        <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email" ref={emailRef} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary" type="submit" style={{margin:'20px 0 10px 0'}}>Login</Button>
      </form>
        </Card.Text>
        
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default Login