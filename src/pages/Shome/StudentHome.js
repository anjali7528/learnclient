import React from 'react'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import Dashboard from '../../Components/Dashboard/Dashboard'
import './StudentHome.css'
import StudentDashboard from '../../Components/StudentDashboard/StudentDashboard'

const StudentHome = () => {
  return (
    <>   
    <div className='home'>
        <div className='sidebarDiv'> 
        <Dsidebar/>
                <h2>Dashboard</h2>
                <div className='boxes'></div>
               <StudentDashboard/>
            </div>
        </div>
   </>
  )
}

export default StudentHome