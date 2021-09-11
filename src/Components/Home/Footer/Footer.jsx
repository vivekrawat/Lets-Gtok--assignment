import React from 'react'
import {Form,Container,Button} from 'react-bootstrap'
const Footer = () => {
    return (
        <Container fluid className="footer">
            <h2>Contact Us</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="eg. Vivek Rawat" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Footer
