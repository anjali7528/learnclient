import React from 'react'
import {Card, CardGroup,Button} from 'react-bootstrap'

const Features = () => {
  return (
    <>
    <CardGroup id="features">
  <Card style={{margin:'5%'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1550418290-a8d86ad674a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Title>Create</Card.Title>
      <Card.Text></Card.Text>
    </Card.Body>
  </Card>
  <Card  style={{margin:'5%'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1517414204284-fb7e98b2e255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
    <Card.Body>
      <Card.Title>Gamify</Card.Title>
      <Card.Text></Card.Text>
    </Card.Body>
    
  </Card>
  <Card   style={{margin:'5%'}}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1593600269510-0816682e80da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    style={{objectFit:'cover'}}
    />
    <Card.Body>
      <Card.Title>Learn</Card.Title>
      <Card.Text></Card.Text>
    </Card.Body>
 
  </Card>
</CardGroup>
    </>
  )
}

export default Features