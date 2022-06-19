import React from 'react'
import Course from '../Course/Course'

const Courses = ({courses}) => {
  return (
    <div style={{paddingTop:'20px'}}>
      {courses.map((p)=>(
        <Course course={p} />
      ))}
    </div>
  )
}

export default Courses