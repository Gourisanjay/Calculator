import React, { useState } from 'react';
import './App.css';
import * as math from "mathjs";
import Buttons from './components/Buttons';
import Value from './components/Value';

const App = () => {

 const[text,setText] = useState(['']);


 const addToText = (val) =>{
   setText((text) =>[...text , val ]);
 }

 const calculateOutput = () =>{
  const value = text.join('');

   setText([math.evaluate(value)]);
 }

 const resetValue = () => {
  setText([ ]);
 }
 const backValue = () =>{
  setText((text) => text.slice(0,-1));
 }

  return (
    <div className="App">
      <div className='clac-wrapper'>
      <Value text={text.join('')}  />
      {/* <Value/> */}
      <div className='row'>
        <Buttons  symbol="7"  handleClick={addToText} />
         <Buttons symbol="8" handleClick={addToText} />
         <Buttons symbol="9"  handleClick={addToText} />
         <Buttons symbol="/" handleClick={addToText} />
      </div>
      <div className='row'>
      <Buttons symbol="4"  handleClick={addToText} />
         <Buttons symbol="5" handleClick={addToText} />
         <Buttons symbol="6"  handleClick={addToText} />
         <Buttons symbol="*"  handleClick={addToText}/>
      </div>
      <div className='row'>
         <Buttons symbol="1"  handleClick={addToText} />
         <Buttons symbol="2"  handleClick={addToText}/>
         <Buttons symbol="3"  handleClick={addToText} />
         <Buttons symbol="-"  handleClick={addToText} />
      </div>
      <div className='row'>
      <Buttons symbol="0"  handleClick={addToText} />
         <Buttons symbol="."  handleClick={addToText} />
         <Buttons symbol="+"  handleClick={addToText} />
         <Buttons symbol="="  handleClick={calculateOutput}  />
      </div>
      <div className='row'>
      <Buttons symbol="Clear" handleClick={resetValue} />
      <Buttons symbol="Back" handleClick={backValue } />
      </div>
      </div>
    </div>
  );
}

export default App;
