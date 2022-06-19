import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container} from 'react-bootstrap'
import ScoreQuiz from '../../Components/ScoreQuiz/ScoreQuiz'
import Dsidebar from '../../Components/Sidebar/Dsidebar'


const DisplayQuiz = () => {
const [dquiz, setDquiz] = useState([])
const [opt,setOption] = useState()
const[quiz,setQuiz] = useState(null)

    useEffect(() => {
        const fetchCourses = async ()=>{
          const res = await axios.get("https://learnplus.herokuapp.com/api/quiz/allQuiz")
          setDquiz([...res.data])
        }
        fetchCourses()
      }, [])

      const quizHandler = ()=>{
        let idx= -1;
        // console.log(dquiz[0])
        for(let i=0;i<dquiz.length;i++){
            if(dquiz[i].course === opt){
                idx = i;
                break;
            }
        }
        setQuiz(dquiz[idx]);
      }

  return (
    <>
    <Dsidebar />
    <Container>
      <h3>Available Quizzes</h3>
      <select onChange={(e)=>setOption(e.target.value)}> 
      <option value="Select a quiz"> -- Select a Quiz -- </option>
      {dquiz.map((quiz) => <option value={quiz.course}>{quiz.course}</option>)}
    </select>

    <button onClick={quizHandler}>View Quiz</button>

    {quiz!=null?<ScoreQuiz quiz={quiz}/>:<p></p>}
    </Container>
    </>
  )
}

export default DisplayQuiz