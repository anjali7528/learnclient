import React,{useState} from 'react'
import axios from 'axios'
import {Card,Form,FloatingLabel,Button} from 'react-bootstrap'

const Register = () => {
  const [username, setUsername] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const handleSubmit = async (e) =>{
    console.log("hello")
    e.preventDefault();
    setError(false)
    try{

      if(window.location.pathname == "/register/student"){
        const res = await axios.post('https://learnplus.herokuapp.com/api/auth/register/student',{
          username,idnumber,email,password
        }) 
        res.data && window.location.replace("/login/student");
      };

      if(window.location.pathname == "/register/teacher" ){
        const res = await axios.post('https://learnplus.herokuapp.com/api/auth/register/teacher',{
          username,email,password
        });
        res.data && window.location.replace("/login/teacher");
      }
    }
    catch(err){
      console.log(err);
      setError(true);
    }
  }

  return (
    <div style={{textAlign:'center'}}>
    <Card style={{ width: '50vh', border:'1px solid gray', borderRadius:'10px'}} className='sm-12'>
      <Card.Body>
        <Card.Title style={{margin:'10px 0 20px 0'}}>Register</Card.Title>
        <Card.Text>
        <>
        <form  onSubmit={handleSubmit}>
        <Form.Floating className="mb-3" >
    <Form.Control
      id="floatingInputCustom"
      type="email"
      onChange={e=>setEmail(e.target.value)}
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
      onChange={e=>setIdnumber(e.target.value)}
    />
    <label htmlFor="floatingInputCustom">School-ID</label>
  </Form.Floating> 
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="name"
      onChange={e=>setUsername(e.target.value)}
    />
    <label htmlFor="floatingInputCustom">Name</label>
  </Form.Floating>
  
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      onChange={e=>setPassword(e.target.value)}
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
    <Button variant="primary" type="submit" style={{margin:'20px 0 10px 0'}}>Submit</Button>{' '}
  </Form.Floating>
  </form>
  {/* {error && <span>Something went wrong!</span>} */}
</>
        </Card.Text>
        
      </Card.Body>
    </Card>
   </div>
  )
}

export default Register