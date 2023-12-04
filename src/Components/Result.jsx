import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'; 
import Card from 'react-bootstrap/Card';
import { Container, Row ,Col, CardText, CardTitle, CardBody} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloud from '../Images/cloud.png';
import wind from '../Images/wind.png';
import rain from '../Images/rain.png';
import location from '../Images/location.png';
import snow from '../Images/snow.png';
import humidity from '../Images/humidity.png';
import date from '../Images/date.png';


const Result = () => {
    const locations = useSelector((state)=>state.datastore.datas)
    const [result,setresult] = useState([])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=add939f751bc1ac61cad7ea1e80e9aa2`

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setresult(res.data);
            console.log("datas",res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[locations])
    console.log("loca",locations);


    if(result != '')
    {
      return (
        <div className='d-flex justify-content-center'>
          <Card className='mt-5 bg-transparent text-white resultcard border-0' style={{height:'20rem',width:'50rem'}}>
            <Card.Body>
              <Container>
                <CardBody className='row bg-transparent'>
                  <CardTitle className='col text-center'>
                  {result?(<div className='place'><Card.Img  src={location} style={{height:'1.8rem',width:'1.8rem'}} /> {result.name} </div>):null}
                  </CardTitle>
                </CardBody>
                <CardBody className='row bg-transparent'>
                  <CardTitle className='col-md-4  text-center'>
                    <Card style={{ width: '14rem' }} className='bg-transparent text-white border-0'>
                      <Card.Body>
                        <Card.Title className='tit'>WEATHER <Card.Img  src={cloud} style={{height:'1.7rem',width:'1.7rem'}} /></Card.Title>
                        {result.main?<Card.Text>Temperature :{result.main.feels_like}°F</Card.Text>:null}
                        {/* <Card.Text>{result.main.temp}</Card.Text>
                        <Card.Text>{result.main.temp}</Card.Text> */}
                      </Card.Body>
                    </Card>
                  </CardTitle>
                  <CardTitle className='col-md-4 text-center'>
                    <Card style={{ width: '14rem' }} className='bg-transparent text-white border-0'>
                        <Card.Body>
                        <Card.Title className='tit'>WIND <Card.Img  src={wind} style={{height:'1.5rem',width:'1.5rem'}} /></Card.Title>
                          {result.wind?<Card.Text>{result.wind.speed} MPH</Card.Text>:null}
                        </Card.Body>
                      </Card>
                    </CardTitle>
                    <CardTitle className='col-md-4 text-center'>
                    <Card style={{ width: '14rem' }} className='bg-transparent text-white border-0'>
                        <Card.Body>
                        <Card.Title className='tit'>HUMIDITY <Card.Img  src={humidity} style={{height:'1.5rem',width:'1.5rem'}} /></Card.Title>
                          {result.main?<Card.Text>{result.main.humidity} %</Card.Text>:null}
                        </Card.Body>
                      </Card>
                    </CardTitle>
                </CardBody>
              </Container>
            </Card.Body>
          </Card>
        </div>
      )
    }
    
}

export default Result
