import React,{useState,useContext} from 'react'
import QuizForm from './QuizForm'
import Quiz from '../Quiz/Quiz'
import {Container, Button} from 'react-bootstrap'
import QuizCourse from '../../pages/QuizCourse/QuizCourse'
import {Context} from '../../context/Context'
import axios from 'axios'

const QuizMake = () => {

    const[questions,setQuestions] = useState([])
    const[detail,setDetails] = useState([])
    const {user} = useContext(Context);
    const handleSubmit = ()=>{
        setResponse()

        async function setResponse(){
            const newQuestion = {
                course:detail[0].course,
                pmarks:detail[0].marks,
                question: [...questions],
                creator:user.username
                 }
           
              try{
               const res = await axios.post("https://learnplus.herokuapp.com/api/quiz/makeQuiz",newQuestion);
                console.log(res);
              }catch(err){
                console.log(err)
              }
        }
    }
    
    
    const displayQuestion = questions.map((ques)=>
        <Quiz question={ques.question} op1={ques.options[0]} op2={ques.options[1]} op3={ques.options[2]} op4={ques.options[3]} marks={ques.marks}/>)
  return (
    <Container>
        <Button type="button" onClick={handleSubmit} style={{margin:'5% 10% 0% 20%',cursor:'pointer'}}>Submit Quiz</Button>
        <QuizCourse setDetails={setDetails} />
        <QuizForm setQuestions={setQuestions}/>

        {displayQuestion}
        
    </Container>
  )
}

export default QuizMake