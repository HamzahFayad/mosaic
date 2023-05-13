import "./App.css";
import {tiles_data} from "./data/tiles";
import { useState, useEffect } from "react";

function App() {

  // shuffle array function----
  const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
    return array;
  }
  
  //state for each tile in tiles_data
  const [tile, setTile] = useState(tiles_data);
 
  //randomize each tile on page load
  useEffect(() => {
    const newTiles = shuffle([...tiles_data]);
    setTile(newTiles);
  }, []);

  //on button click shuffle array
  const handleShuffle = () => {
    const newTiles = shuffle([...tile]);
    setTile(newTiles);
    console.log("Shuffle", tiles_data);
  }

  const elements = tile.map((t) => {
            return (
              <div  key={t.name} className="tile-wrapper">
                <div className={'tile ' + t.color}></div>
                </div>
            )
          })
  
  return (
    
    <div className="App Grid-width-wide">
      <header className="App-header">
        <h1>
          mus
          <span>A</span>ic
        </h1>
      </header>
      <button onClick={handleShuffle}>Generate</button>
      <section className="tiles Grid-width-wide">
        {elements}
        {elements}
        {elements}
        {elements}
      </section>
      <svg style={{"visibility": "hidden", "position": "absolute"}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="round">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
          </defs>
</svg>
    </div>
  );
}

export default App;
