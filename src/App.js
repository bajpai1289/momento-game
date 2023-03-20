import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import shuffle from './utilities/shuffle';

function App() {
  const [cards, setCards] = useState(shuffle);
  return (
    <>
      <div className="grid">
        {cards.map((card)=>{
          const {image, id, matched} = card;
          return(
            <Card
              key = {id}
              image = {image}
              selected = {false}
              onClick = {()=>{}}/>
          )
        })}
      </div>
    </>
  );
}

export default App;
