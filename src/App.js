import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bg'>
      </div>
      <div className='keys'>
        {/* <div className='octave-block'>
        
        </div> */}
        <div className='key-block cE'>
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
        <div className='key-block cE'>
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
