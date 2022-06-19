import React,{ useState, useRef, useEffect} from 'react'
import {Form, Button,Row,Col} from 'react-bootstrap'
import './ouizform.css'

const QuizForm = (props) => {

  const [question, setQuestion] = useState("");
  const [option,setOption] = useState([]);
  const[marks,setMarks] = useState(0);
  const [ answer,setAnswer] = useState([])
  const op1 = useRef();
  const op2 = useRef();
  const op3 = useRef();
  const op4 = useRef();
  const cop1 = useRef();
  const cop2 = useRef();
  const cop3 = useRef();
  const cop4 = useRef();
  const [data,setData] = useState(false)

  useEffect(() =>{
    if(data)
      setValues();
     

  function setValues(){
      const newQuestion = {
     question, 
     options: option,
     Answer: answer,
      marks,
      }

      props.setQuestions(questions=>{
        return [...questions,newQuestion]
      })

       /* try{
    const res = await axios.post("/quiz",newQuestion);
    window.location.replace("/teacher/makeQuiz");
   console.log(res);
   }catch(err){}

   */

      setOption([])
    setAnswer([])
    setData(false)
    }

  },[data])

  const handleAnswer = (option) =>{
    // a b c d values here
    if(option.current.checked === true)
       setAnswer(answer => [...answer,option.current.value])
  }
 

  const handleOptions = (options) => {
      // option values from input fields
      setOption(option => [...option, options.current.value])
      
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
      handleAnswer(cop1)
      handleOptions(op1)

      handleAnswer(cop2)
      handleOptions(op2)

      handleAnswer(cop3)
      handleOptions(op3)

      handleAnswer(cop4)
      handleOptions(op4)
    
      setData(true)
  };



  return (

    

    <div style={{margin:'5% 10% 0% 20%'}}>
      <h2>Add Questions </h2>
       <Form onSubmit={handleSubmit}>
       {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
       Category
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Add category" onChange={e=>setCourse(e.target.value)}/>
    </Col>
  </Form.Group> */}
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Question
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Add Question"  onChange={e=>setQuestion(e.target.value)}/>
    </Col>
  </Form.Group>

  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Choose Answer
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="checkbox"
          label="option 1"
          name="a"
          id="formHorizontalRadios1"
          ref={cop1}
          value="a"
        />
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" ref={op1} placeholder="Add Options" />
     
    </Col>
  </Form.Group>
        <Form.Check
          type="checkbox"
          label="option2"
          name="b"
          id="formHorizontalRadios2"
          ref={cop2}
          value="b"
        />
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Add Options"  ref={op2}/>
     
    </Col>
  </Form.Group>
        <Form.Check
          type="checkbox"
          label="option3"
          name="c"
          id="formHorizontalRadios3"
          ref={cop3}
          value="c"
        />
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Add Options" ref={op3} />
    
    </Col>
  </Form.Group>
        <Form.Check
          type="checkbox"
          label="option4"
          name="d"
          id="formHorizontalRadios3"
          ref={cop4}
          value="d"
        />
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Add Options" ref={op4}/>
     
    </Col>
  </Form.Group>
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Marks
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Add Marks"  onChange={e=>setMarks(e.target.value)} />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Add</Button>
    </Col>
  </Form.Group>
</Form>
    </div>
  )
}

export default QuizForm