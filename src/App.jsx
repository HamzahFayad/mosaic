import "./App.css";
import {tiles_data} from "./data/tiles";
import { useState, useEffect } from "react";
import key1 from "./audio/key01.mp3"
import key2 from "./audio/key02.mp3"
import key3 from "./audio/key03.mp3"
import key4 from "./audio/key04.mp3"
import key5 from "./audio/key05.mp3"
import key6 from "./audio/key06.mp3"

function App() {

  let audios = [key1, key2, key3, key4, key5, key6];
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
 
  //const [range, setRange] = useState(0);

  /*const handleRange = (e) => {
    setRange(e.target.value);
    console.log(e.target.value);
  }*/

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


  const playSound = (i) => {
    //let audio = new Audio(key1);
    //audio.play();
    var audioKey = document.querySelector(".audio-"+i);
    audioKey.play();
    //audioKey.volume = range;
    console.log(audioKey.currentTime);
    if (audioKey.currentTime > 0.25) {
      console.log("PAUSE");
      audioKey.currentTime = 0;
    }
  }

  const elements = tile.map((t,i) => {
            return (
              <div onClick={() => {playSound(i)}} key={t.name} className="tile-wrapper">
                <div className={'tile ' + t.color}></div>
                <audio style={{ "visibility": "hidden", "display": "none"}} className={"audioKey audio-"+i} src={audios[i]} controls/>
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
      {/*<input type="range"onChange={handleRange} value={range} min={0} max={1} step={0.1}/>*/}
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
