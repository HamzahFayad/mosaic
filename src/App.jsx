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
  
  return (
    <div className="App Grid-width-wide">
      <header className="App-header">
        <h1>
          mus
          <span>A</span>ic
        </h1>
      </header>
      <section className="tiles Grid-width-wide">
        {
          tile.map((t) => {
            return(
              <div className="tile" key={t.color}>{t.color}</div>
            )
          })
        }
      </section>
      <button onClick={handleShuffle}>Generate</button>
    </div>
  );
}

export default App;
