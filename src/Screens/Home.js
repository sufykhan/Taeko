import React from 'react'
import { Card, Form,Col, Button } from 'react-bootstrap'
import Header from '../Components/Header'

const Home = () => {
    return (
        <div style={{textAlign:"-webkit-center"}}>
      <Card style={{minWidth:"20rem",boxShadow:"2px 2px 2px #ddd",maxWidth:"80rem"}}>
          <Card.Body style={{backgroundColor:"aliceblue"}}>
              <Form>
                  <Form.Row>
                      <Form.Group as={Col}>
                      <Form.Label>Enter 1st URL</Form.Label>
      <Form.Control type="text" placeholder="Enter URL" style={{    textAlignLast: "center"}}/>
                      </Form.Group>
                      <Form.Group as={Col}>
                      <Form.Label>Enter 2nd URL</Form.Label>
      <Form.Control type="text" placeholder="Enter URL" style={{    textAlignLast: "center"}}/>
                      </Form.Group>
                  </Form.Row>
              </Form>
          </Card.Body>
          <Card.Footer>
              <Button variant="outline-dark" style={{width:"100%"}} >
                    Compare
              </Button>
          </Card.Footer>
      </Card>
        </div>
    )
}

export default Home
