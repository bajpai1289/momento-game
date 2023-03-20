import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import shuffle from './utilities/shuffle';

function App() {
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);// first selection
  const [pickTwo, setpickTwo] = useState(null);//second selection
  const [disabled, setDisabled] = useState(false);  //Delay Handler-make sure user dont click everything and get all hte matches
  const [wins, setWins] = useState(0);

  const handleClick=(card)=>{
    if(!disabled){
      pickOne?setpickTwo(card):setPickOne(card);
    }
  };
  const handleNewGame = () =>{
     setWins(0);
     handleTurn();
     setCards(shuffle)
  }
  const handleTurn = () =>{
    setPickOne(null);
    setpickTwo(null);
    setDisabled(false);
  };
  // used for selection and match handling 
  useEffect(()=>{
    let pickTimer;

    // Wto cards has been clicked
    if (pickOne && pickTwo){
      if(pickOne.image === pickTwo.image){
        setCards((prevCard)=>{
          return prevCard.map((card)=>{
            if(card.image===pickOne.image){
              //update hte card poroperrtt ti reflect hte mathc
              return {...card, matched: true }; 
            } else{
              //no match
              return card;
            }
          })
        });
        handleTurn();
      } else{
        // prevent new selections until disabled
        setDisabled(true);
        //disable the ui for 100 ecinds 
        pickTimer =  setTimeout(() => {
          handleTurn()
        }, 1000);
      }
    }
    return ()=>{
      clearTimeout(pickTimer)
    }
     
  },[cards, pickOne, pickTwo])


  //if player found all the matchs and we need to reset the board
  useEffect(()=>{
    //check for any remaining filter 
    const checkWin = cards.filter((card)=>!card.matched);

    //all matches made, handle win/ badge counter
    if(cards.length && checkWin.length<1){
      setWins(wins+1);
      handleTurn();
      setCards(shuffle)

    }
  }, [cards, wins])
  return (
    <>
    <Header handleNewGame={handleNewGame} wins = {wins} />
      <div className="grid">
        {cards.map((card)=>{
          const {image, id, matched} = card;
          return(
            <Card
              key = {id}
              image = {image}
              selected = {card === pickOne || card === pickTwo || matched}
              onClick = {()=>handleClick(card)}/>
          )
        })}
      </div>
    </>
  );
}

export default App;
