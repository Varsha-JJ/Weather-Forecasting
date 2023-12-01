import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Search = () => {
    const [data,setdata] = useState('');
    const handlesearch = (event) =>{
        setdata(event.target.value)
    }
    console.log(data);
  return (
    <div>
      <Form.Control
              type="search"
              placeholder="Search for cities"
              className="me-2"
              aria-label="Search"
              onChange={handlesearch}
            />
    </div>
  )
}

export default Search
