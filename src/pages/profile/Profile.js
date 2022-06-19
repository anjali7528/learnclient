import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Dsidebar from '../../Components/Sidebar/Dsidebar'
import { Context } from '../../context/Context'
import './profile.css'

const Profile = () => {
    const{user} = useContext(Context)
  return (
    <div>

        <Dsidebar/>
        
        <Container>
        <h2>Profile</h2>
         <table style={{}}>
            <thead>
             
                <td>Name</td>
                <td>Email</td>
                
            </thead>
            <tbody>
           <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                   
                    
                </tr>
            </tbody>
        </table>
        </Container>
    </div>
  )
}

export default Profile