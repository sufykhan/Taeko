import React, { useEffect, useState } from 'react'
import { Button, Container, FormControl, InputGroup, Pagination, ProgressBar, Spinner, Table } from 'react-bootstrap'
import axios from "axios";
const HomeScreen = () => {
  const [active, setActive] = useState(1);
  const [url, setUrl] = useState("");
 
  const items=[];
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const [datas, setData] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { data } = await axios.get(
          "https://www.breakingbadapi.com/api/characters"
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, []);

// CUSTOMIZE CUSTOMIZE CUSTOMIZE CUSTOMIZE CUSTOMIZE CUSTOMIZE CUSTOMIZE
// const fetchData=()=>{
//   const fetchAll = async () => {
//     try {
//       const { data } = await axios.get(
//         "Your Url",{ params: { URL: {url} } }
//       );
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchAll();
//}
   
  const ItemOfTable = () => {
    return datas
      .filter((dat, index) => index >=(active-1) * 10 && index <= (active-1) * 10 + 9)
      .map((filterData,indi) => <tr>
      <td>{(active-1)*10+indi+1}</td>
      <td>URL {filterData.name}</td>
      <td><ProgressBar style={{height:"20px"}} striped variant="warning" now={indi*10} animated label={`${indi*10}%`}/></td>
    </tr>);
  };





    return (
        <div style={{padding:"20px"}}>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default" style={{width:"10vw"}}>URL:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      onChange={(e)=>setUrl(e.target.value)}
    />
     <InputGroup.Append >
      {/* CUSTOMIZE CUSTOMIZE CUSTOMIZE CUSTOMIZE CUSTOMIZE---><Button variant="outline-dark" onClick={fetchData()}>Compute</Button>   */}
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
   {datas.length==0?<Spinner animation="border" />:ItemOfTable()}
    </tbody>
</Table>

<Pagination style={{ justifyContent: "center" }} size="lg" >
        {items}
      </Pagination>
        </div>
    )
}

export default HomeScreen
