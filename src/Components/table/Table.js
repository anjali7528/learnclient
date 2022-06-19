import React from 'react'
import './table.css'
const Table = (props) => {
    console.log(props.data)
  return (
    <>
    <table style={{border:'1px solid black'}}>
            <thead>
                <td>S. No.</td>
                <td>Course Name</td>
                <td>Marks Obtained</td>
                <td>Passing Marks</td>
                <td>Submission Time</td>
            </thead>
            <tbody>
            {props.data.map((data,idx)=>{
               return  (<tr>
                    <td>{idx+1}</td>
                    <td>{data.coursename}</td>
                    <td>{data.marks}</td>
                    <td>{data.pmarks}</td>
                    <td>{data.createdAt}</td>
                </tr>)
            })}
            </tbody>
        </table>
    </>
  )
}

export default Table