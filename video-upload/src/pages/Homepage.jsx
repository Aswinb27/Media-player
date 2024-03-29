import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'


function Homepage() {
  const[serverRes,setserverResponse]=useState({})

  const handleResponse=(res)=>{
    setserverResponse(res)
  }


  console.log(serverRes);
  
  return (
    <div>
      <h1 className='text-info ms-5 mb-5 bold'>All videocards</h1>
    <Link to={'/watchhistory'} className='ms-auto d-flex justify-content-end mb-5' style={{textDecoration:"none",fontsize:"25px",color:"blue"}}>watch history</Link>


<Row>

  <Col lg={1}>
    <Add handleres={handleResponse}/>
  </Col>
  <Col lg={7}>
    <View serverRes={serverRes}/>
  </Col>
  <Col lg={4}>
    <Category/>
  </Col>
  
</Row>



    </div>
  )
}

export default Homepage