import React  from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
   // console.log(props);
    return(
        <div className='card-list'>
          {
          props.instrunment.map(music => (
          <Card key={music.id} music={music}/> 
          ))}
          
          </div>
    )
} 