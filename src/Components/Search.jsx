import React from 'react';
import Form from 'react-bootstrap/Form';

const Search = () => {
  return (
    <div>
      <Form.Control
              type="search"
              placeholder="Search for cities"
              className="me-2"
              aria-label="Search"
            />
    </div>
  )
}

export default Search
