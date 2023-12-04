import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { setdatas } from '../Components/Data';
import {useDispatch} from 'react-redux';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {


    const [value,setvalue] = useState('')
    const dispatch = useDispatch()
    const handlesearch = (event) =>{
        setvalue(event.target.value)
    }

    // useEffect(()=>{
    //     dispatch(setdatas(value))
    // })

    const searchLocation = (e) =>{
      if(e.key === 'Enter'){
        dispatch(setdatas(value))
      }
    }

  return (
    <div>
      <Form.Control
              type="search"
              placeholder="Search for cities"
              className="me-2 search"
              aria-label="Search"
              onChange={handlesearch}
              onKeyPress={searchLocation}
            />
    </div>
  )
}

export default Search
