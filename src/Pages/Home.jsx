import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Search from '../Components/Search';
import Result from '../Components/Result';
import '../style/style.css'

const Home = () => {

  return (
    <div className='d-flex justify-content-center mt-5'>
        <Card style={{width:'1200px', height: '650px'}} className='card-sty'>
            <Card.Body>
                <div className='d-flex justify-content-between mb-4'>
                    <Card.Title className='heading'>Weather Forecasting</Card.Title>
                    {/* <Card.Title>Card Title</Card.Title>
                    <Card.Text>gi</Card.Text> */}
                </div>
                <Search/>
                <Result/>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Home
