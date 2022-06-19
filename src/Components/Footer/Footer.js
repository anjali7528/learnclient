import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <>
     <Card id="footer">
      <Card.Header>Contact us</Card.Header>
      <Card.Body>
        <Card.Title>Feel free to contact on our toll-free number 1800-99-797</Card.Title>
        <Card.Text>
          For more help, mail your doubts on learn+@hotmail.com
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </>
  )
}

export default Footer