import React from 'react'
import './App.css';
import {Form, Card} from 'react-bootstrap'
import SquareDisplay from './SquareDisplay';
import HomeDisc from './HomeDisc';
import NavBar from './NavBar';

import {Link} from 'react-router-dom'
 
function Home() {
  return (
    <Card>
    <Form>
    
    <Form.Group>
      

      <NavBar/>
      <HomeDisc/>
      <SquareDisplay/>
      


    </Form.Group>

    </Form>

    </Card>

  )
}

export default Home


