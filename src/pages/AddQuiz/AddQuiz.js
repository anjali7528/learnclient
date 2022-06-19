import React from 'react'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import QuizMake from '../../Components/MakeQuizForm/QuizMake'

const AddQuiz = () => {
  return (
    <>   
    <div className='home'>
        <div className='sidebarDiv'> 
          <Dsidebar/>
                <h2>Add New Quiz</h2>
                <div className='boxes'></div>
               <QuizMake/>
            </div>
        </div>
      

       
   </>
  )
}

export default AddQuiz