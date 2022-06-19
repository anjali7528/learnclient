import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import { Container } from 'react-bootstrap'

const Student = () => {
const [student,setStudent] = useState([])
    useEffect(() => {
        const fetchCourses = async ()=>{
          const res = await axios.get("https://learnplus.herokuapp.com/api/student")
          setStudent([...res.data])
        }
        fetchCourses()
      }, [])
  return (
    <div>

        <Dsidebar/>
        <h2>Student List</h2>
        <Container>
        <table style={{border:'1px solid black'}}>
            <thead>
                <td>S. No.</td>
                <td>Course Name</td>
                <td>Marks Obtained</td>
                <td>Passing Marks</td>
              
            </thead>
            <tbody>
            {student.map((data,idx)=>{
               return  (<tr>
                    <td>{idx+1}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.idnumber}</td>
                </tr>)
            })}
            </tbody>
        </table>
        </Container>
    </div>
  )
}

export default Student