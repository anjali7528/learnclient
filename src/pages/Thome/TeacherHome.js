import React from 'react'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import Dashboard from '../../Components/Dashboard/Dashboard'
import './techerhome.css'
const TeacherHome = () => {
  return (
    <>   
    <div className='home'>
        <div className='sidebarDiv'> 
        <Dsidebar/>
                <h2>Dashboard</h2>
                <div className='boxes'></div>
               <Dashboard/>
            </div>
        </div>
      

       
   </>
  )
}

export default TeacherHome