import React,{useState,useContext} from 'react'
import { Context } from '../../context/Context'
import QuizScore from '../Quiz/QuizScore'
import axios from 'axios' 

const ScoreQuiz = (props) => {
    const {user} = useContext(Context)
    const[i,seti] = useState(0)
    const[marks,setMarks] = useState(0)
    const[response,setResponse] = useState([])

    const nextHandler = ()=>{
        if(arrayEquals(response,props.quiz.question[i].Answer) == true){
            setMarks(marks=>{
                return (marks+(+(props.quiz.question[i].marks)))
            })
        }

        seti(i=>(i+1))
    }

    const endQuizHandler = async ()=>{

          //marks:marks(strinf)
        // coursename: props.quiz.course
        // passing marks :props.quiz.pmarks
        // student details from context

        const newResult = {
            marks,
            coursename:props.quiz.course,
            pmarks:props.quiz.pmarks,
            userId:user. idnumber
             }
       
          try{
           const res = await axios.post("https://learnplus.herokuapp.com/api/result",newResult);
           window.location.replace("/student/dashboard")
            console.log(res);
          }catch(err){
            console.log(err)
          }


       
    }

    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
  return (
    <>
        <br />
        <h3>Course : {props.quiz.course}</h3>
        <h3>Passing Marks : {props.quiz.pmarks}</h3>
        <h3>Current Marks : {marks}</h3>
        {(i<props.quiz.question.length)?
        <QuizScore 
        question={props.quiz.question[i].question} 
        op1={props.quiz.question[i].options[0]} 
        op2={props.quiz.question[i].options[1]}
         op3={props.quiz.question[i].options[2]} 
         op4={props.quiz.question[i].options[3]} 
         marks={props.quiz.question[i].marks} 
         setResponse={setResponse}
         />:<p></p>
        }

        {(i<props.quiz.question.length)?
        <button onClick={nextHandler}>Next Question</button>:<p></p>}
        <button onClick={endQuizHandler}>End Quiz</button>
    </>

  )
}

export default ScoreQuiz