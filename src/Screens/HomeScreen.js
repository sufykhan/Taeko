import React from 'react'
import { FormControl, InputGroup, Table } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <div>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>

  <Table striped bordered hover >
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
      <td></td>
    </tr>
    </tbody>
</Table>
        </div>
    )
}

export default HomeScreen
