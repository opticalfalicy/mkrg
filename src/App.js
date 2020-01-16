import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='dashboard'>
        <div className='title-block'>
          <h1 className='title-text'>
            microKorg
          </h1>
        </div>
        <div className='bank-block'>
          <ul className='sound-bank'>
            <li id='bank-1' className='bank-item'>Synth 1</li>
            <li id='bank-2' className='bank-item'>Synth 2</li>
            <li id='bank-3' className='bank-item'>Synth 3S</li>
          </ul>
        </div>
      </div>
      <div className='keys'>
        {/* <div className='octave-block'>
        
        </div> */}
        <div className='key-block cE cE-1'>
          <div className='w-keys'>
        <item className='key-note C W'>
         </item>
        <item className='key-note D W'>
         </item>
        <item className='key-note E W'>
         </item>
          </div>
        <div className='b-keys'>
         <item className='key-note Df Bl'>
          </item>
         <item className='key-note Ef Bl'>
          </item>
        </div>
        </div>
        <div className='key-block fB fB-1'>
          <div className='w-keys'>
          <item className='key-note F W'>
          </item>
          <item className='key-note G W'>
          </item>
          <item className='key-note A W'>
          </item>
          <item className='key-note B W'>
          </item>

          </div>
          <div className='b-keys'>
          <item className='key-note Gf Bl'>
          </item>
          <item className='key-note Af Bl'>
          </item>
          <item className='key-note Bf Bl'>
          </item>
          </div>
        </div>
        <div className='key-block cE cE-2'>
          <div className='w-keys'>
        <item className='key-note C W'>
         </item>
        <item className='key-note D W'>
         </item>
        <item className='key-note E W'>
         </item>
          </div>
        <div className='b-keys'>
         <item className='key-note Df Bl'>
          </item>
         <item className='key-note Ef Bl'>
          </item>
        </div>
        </div>
        {/* <div className='key-block fB fB-2'>
          <item className='key-note F W'>
          </item>
          <item className='key-note G W'>
          </item>
          <item className='key-note A W'>
          </item>
          <item className='key-note B W'>
          </item>
        </div> */}
      </div>
    </div>
  );
}

export default App;
