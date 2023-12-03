import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'; 
import Card from 'react-bootstrap/Card';
import { Container, Row ,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloud from '../Images/cloud.png';
import wind from '../Images/wind.png';
import rain from '../Images/rain.png';
import location from '../Images/location.png';
import snow from '../Images/snow.png';
import humidity from '../Images/humidity.png';
import date from '../Images/date.png';


const Result = () => {
    const locations = 'wayanad'
    const [result,setresult] = useState([])

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=9ffec84c0b36aaa6c1c4a44e3d0eaae1`).then((res)=>{
            setresult(res.data.data);
            console.log("datas",res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[locations])
    console.log("loca",locations);
  return (
    <div className='d-flex justify-content-center'>
      <Card className='mt-5 bg-transparent text-white resultcard' style={{height:'20rem',width:'40rem'}}>
        <Card.Body>
          <Container>
            <Row justify-content-md-center>
              <Col  md="auto" className="text-center">Wayanad District, Kerala, India <br/> <img src={location} width={20} height={20} /></Col>
              <Col  md="auto" className="text-center">CURRENT WEATHER <br/>{result.values.temperature}</Col>
              <Col  md={1}><img src={cloud} width={60} height={60} /></Col>
            </Row>
            <Row justify-content-md-center className='mb-3 mt-4'>
              <Col xs={12} md={15} className="text-center head">AIR CONDITIONS</Col>
            </Row>
            <Row justify-content-md-center>
              <Col  md={3} className="text-center"><img src={humidity} width={30} height={30} /> <br/> {result.values.humidity} </Col>
              <Col  md={3} className="text-center"><img src={wind} width={30} height={30} /> <br/> {result.values.windSpeed}</Col>
              <Col md={3} className="text-center"><img src={rain} width={30} height={30} />  <br/> {result.values.rainIntensity}</Col>
              <Col md={3} className="text-center"><img src={snow} width={30} height={30} />  <br/> {result.values.snowIntensity}</Col>
            </Row>
            <Row justify-content-md-center className='mb-3 mt-4'>
              <Col md={15} className="text-center head">CURRENT DATE AND TIME </Col>
            </Row>
            <Row justify-content-md-center className='mb-3 mt-2'>
              <Col md={15} className="text-center"><img src={date} width={30} height={30} /> {result.time}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Result
