import React from 'react'
import { Button, Container, FormControl, InputGroup, ProgressBar, Table } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <div style={{padding:"20px"}}>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default" style={{width:"10vw"}}>URL:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
     <InputGroup.Append >
      <Button variant="outline-dark">Compute</Button>
      
    </InputGroup.Append>
  </InputGroup>
 <br/>

  <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.No</th>
      <th>URL</th>
      <th>Similarity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>URL 1</td>
      <td><ProgressBar style={{height:"20px"}} striped variant="warning" now={60} animated label="60%"/></td>
    </tr>
    <tr>
      <td>2</td>
      <td>URL 2</td>
      <td><ProgressBar style={{height:"20px"}} striped variant="success" now={20} animated label="20%"/></td>
    </tr>
    <tr>
      <td>3</td>
      <td>URL 3</td>
      <td><ProgressBar style={{height:"20px"}} striped variant="danger" now={80} animated label="80%"/></td>
    </tr>
    <tr>
      <td>4</td>
      <td>URL 5</td>
      <td><ProgressBar style={{height:"20px"}} striped variant="info" now={40} animated label="40%"/></td>
    </tr>
    </tbody>
</Table>
        </div>
    )
}

export default HomeScreen
