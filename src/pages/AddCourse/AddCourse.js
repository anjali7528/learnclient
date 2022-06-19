import React from 'react'
import AddcourseForm from '../../Components/AddcourseForm/AddcourseForm'
import Dsidebar from '../../Components/Sidebar/Dsidebar'

const AddCourse = () => {
  return (
    <>   
    <div className='home'>
        <div className='sidebarDiv'> 
          <Dsidebar/>
                <h2>Add New Course</h2>
                <div className='boxes'></div>
               <AddcourseForm/>
            </div>
        </div>
      

       
   </>
  )
}

export default AddCourse