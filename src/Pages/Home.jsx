import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Search from '../Components/Search';

const Home = () => {

  return (
    <div className='d-flex justify-content-center mt-5'>
        <Card style={{width:'1200px', height: '650px'}}>
            <Card.Body>
                <div className='d-flex justify-content-between mb-4'>
                    <Card.Title>Weather Forecasting</Card.Title>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>gi</Card.Text>
                </div>
                <Search/>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Home
