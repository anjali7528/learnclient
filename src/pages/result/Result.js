import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import Table from '../../Components/table/Table'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import {Container} from 'react-bootstrap'

const Result = () => {
    const {user} = useContext(Context)
    const [allresult,setAllresult] = useState([])
    const [totalMarks,setMarks] = useState(0)
    
    useEffect(() => {
        const fetchCourses = async ()=>{
          const res = await axios.get("https://learnplus.herokuapp.com/api/result/allresult")
          setAllresult([...res.data])
        }
        fetchCourses()
      }, [])

        const display = allresult.filter(data=>data.userId == user.idnumber)
        

      
  
  return (
    <>
    <Dsidebar />
    <h2>Result</h2>
    <Container>
    <Table data={display}/>
    </Container>
   
        
    </>
  )
}

export default Result