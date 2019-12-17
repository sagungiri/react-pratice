import React from 'react';
import './card.style.css';
export const Card = (props) => (
    <div className='card-container'>
        <h1>
          { props.music.name }
          </h1> 
          <p>
          { props.music.email }
          </p>
    </div>
)
