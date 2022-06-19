import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import Navb from './Components/Navbar/Navb'
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import TeacherHome from './pages/Thome/TeacherHome';
import AddCourse from './pages/AddCourse/AddCourse';
import AddQuiz from './pages/AddQuiz/AddQuiz';
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tlogin from './pages/Tlogin/Tlogin'
import Tregister from './pages/Tregister/Tregister';
import { useContext } from 'react';
import { Context } from "./context/Context";
import StudentHome from './pages/Shome/StudentHome';
import QuizCourse from './pages/QuizCourse/QuizCourse';
import DisplayQuiz from './pages/displayQuiz/DisplayQuiz';
import Result from './pages/result/Result';
import Allcourse from './pages/AllCourse/Allcourse';
import Profile from './pages/profile/Profile';
import Student from './pages/Student/Student';

function App() {
  const {user} = useContext(Context);
  return (
   <Router>
    <Navb />
    <Routes>
    <Route exact path ="/" element={user ? < Tlogin/> : <Home/>}/>
    <Route path="/login/student" element={user ? <StudentHome/> : <SignIn />}/>
    <Route path="/register/student" element={user ? <StudentHome/> : <SignUp/>}/>
    <Route path="/login/teacher" element={user ? <TeacherHome/> : <Tlogin />}/>
    <Route path="/register/teacher" element={user ? <TeacherHome/> : <Tregister/>}/>
    <Route path="/teacher/addCourse" element={user ? <AddCourse/> : <Tregister/>}/>
    <Route path="/teacher/makeQuiz" element={user ? <AddQuiz/> : <Tregister/>}/>
    <Route path="/teacher/QuizCourse" element= {user ? <QuizCourse/> : <Tregister/> }/>
    <Route path="/student/displayQuiz" element= {user ? <DisplayQuiz/> : <Tregister/> }/>
    <Route path='/student/dashboard' element = {user ? <StudentHome/> : <Tregister/>} />
    <Route path='/student/result' element = {user ? <Result/> : <Tregister/>} />
    <Route path='/courses' element = {user ? <Allcourse/> : <SignUp/>} />
    <Route path='/teacher/dashboard' element = {user ? <TeacherHome/> : <Tregister/>} />
    <Route path='/profile' element ={user ? <Profile/> : <SignUp/> } />
    <Route path='/students' element ={user ? <Student/> : <SignUp/> } />
   </Routes>
    </Router>
  );
}

export default App;
