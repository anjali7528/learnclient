import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList} from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { BsFillChatLeftTextFill} from "react-icons/bs";
import {BsPatchQuestion} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";

import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import { Context } from '../../context/Context';


const Dsidebar = () => {

  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
    window.location.replace("/");
  }

  const [menuCollapse, setMenuCollapse] = useState(true)

  //create a custom function that will change menucollapse state from false to true and true to false
const menuIconClick = () => {
  //condition checking to change state from true to false and vice versa
  menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};
  return (
    <>
    <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent id="contentDiv">
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                {(!("idnumber" in user)) ? <Link to="/teacher/dashboard"> Dashboard</Link>:
               <Link to="/student/dashboard"> Dashboard</Link>}
              </MenuItem>
              
              <MenuItem icon={<FaList />}><Link to='/courses'>Courses</Link></MenuItem>
              <MenuItem icon={< BsPatchQuestion/>}><Link to='/student/displayQuiz'>Quiz</Link></MenuItem>
              <MenuItem icon={< CgProfile/>}><Link to='/profile'>Profile</Link></MenuItem>
              <MenuItem icon={<GrGroup />}><Link to='/students'>Students</Link></MenuItem>
              <MenuItem icon={< BsFillChatLeftTextFill/>}>Chat</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  )
}

export default Dsidebar