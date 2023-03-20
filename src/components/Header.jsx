// import React, {useEffect} from 'react'
import { useTitle } from './Title'

const Header = ({handleNewGame, wins}) => {
  // useEffect(() => (document.title = `${wins} wins`), [wins]);
  useTitle(`${wins} wins`);
  return (

    <header className="header">
        <h4>{wins} wins</h4>
        <h3>start</h3>
        <button onClick={handleNewGame}>New</button>
    </header>
  )
}

export default Header