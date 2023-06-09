import React from 'react';
import './data.css';
import Button from '@mui/material/Button';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Dax Patel</h1>
        <h3 className="home__subtitle">Software Engineer</h3>
        <p className="home__description">I bring ideas to code and build scalable applications.</p>
        <Button className='button' variant="contained">Say Hello 💬</Button>
    </div>
  )
}

export default Data;