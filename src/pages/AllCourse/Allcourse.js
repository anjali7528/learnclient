import React,{useState,useEffect} from 'react'
import Courses from '../../Components/Courses/Courses'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import axios from 'axios'
import { Container } from 'react-bootstrap'

const Allcourse = () => {
  const [courses,setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async ()=>{
      const res = await axios.get("https://learnplus.herokuapp.com/api/course")
      setCourses(res.data)
    }
    fetchCourses()
  }, [])
  return (
    <>
        <Dsidebar/>
        <Container>
        <Courses courses={courses}/>
        </Container>
        
    </>
  )
}

export default Allcourse