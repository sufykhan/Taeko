import React, { useEffect, useState } from 'react'
import { Card, Form,Col, Button, ProgressBar, Spinner } from 'react-bootstrap'
import Header from '../Components/Header'
import axios from "axios"

const Home = () => {

    const [url1,setUrl1]=useState("");
    const [url2,setUrl2]=useState("");
    const [datas, setData] = useState([]);
    const [yes,setYes]=useState(false);
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

      console.log(datas[0]);
    //   const compare= async () => {
    //     try {
    //       const { data } = await axios.get(
    //         "https://www.breakingbadapi.com/api/characters"
    //       );
    //       setData(data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    return (
        <div style={{textAlign:"-webkit-center",marginTop:"10vh"}}>
      <Card style={{minWidth:"20rem",boxShadow:"2px 2px 2px #ddd",maxWidth:"80rem"}}>
          <Card.Body style={{backgroundColor:"aliceblue"}}>
              <Form>
                  <Form.Row >
                      <Form.Group as={Col}>
                      <Form.Label>Enter 1st URL</Form.Label>
      <Form.Control type="text" placeholder="Enter URL" style={{    textAlignLast: "center"}} onChange={(e)=>setUrl1(e.target.value)}/>
                      </Form.Group>
                      <Form.Group as={Col}>
                      <Form.Label>Enter 2nd URL</Form.Label>
      <Form.Control type="text" placeholder="Enter URL" style={{    textAlignLast: "center"}} onChange={(e)=>setUrl2(e.target.value)}/>
                      </Form.Group>
                  </Form.Row>
              </Form>
          </Card.Body>
          <Card.Footer>
              <Button variant="outline-dark" style={{width:"100%"}} onClick={()=>setYes(!yes)}>
                    Compare
              </Button>
              {/* <Button variant="outline-dark" style={{width:"100%"}} onClick={compare}>
                    Compare
              </Button> */}
          </Card.Footer>
          {!yes&&<Spinner animation/>}
          {<ProgressBar style={{height:"30px"}} striped variant="success" now={datas[Math.floor(Math.random()*50)].char_id} animated label={`${datas[Math.floor(Math.random()*50)].char_id}%`}/>
         }
         </Card>
         
        </div>
    )
}

export default Home
