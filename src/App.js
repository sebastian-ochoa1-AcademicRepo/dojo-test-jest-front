import React from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [attemps, setAttemps] = useState(0);

  let seeResult = async () => {
    const options = {
      method: 'GET',
      url: `http://localhost:3002/codebreaker/?code=${code}`,
    };
    const respuesta = await axios.request(options);
    setResult(respuesta.data.result);
    setAttemps(respuesta.data.attempts);
  }

  let resetGame = async () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3002/reset',
    };
    const respuesta = await axios.request(options);
    setResult(respuesta.data.result);
    setAttemps(respuesta.data.attempts);
  }

  return (
    <div className="App ">
      <div className='flex flex-col items-center relative z-10 h-auto p-8 py-20'>
        <h1 id='codeTittle' className='mb-14 text-4xl font-semibold text-center text-gray-800'>Code_Breaker</h1>
        <div className='flex flex-row'>
          <input id='code_input'
            className='block w-auto h-14 px-4 py-3 mb-2 border border-2 
                border-transparent border-gray-200 rounded-lg 
                focus:ring focus:ring-blue-500 focus:outline-none'
            placeholder='CODE'
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></input>
          <button id='send_button' 
          className='ml-4 px-3 py-3 h-14 font-medium text-white bg-blue-600 rounded-lg'
          onClick={seeResult}
          >SEND</button>
        </div>
        {(isNaN(code) || code.length>4 || code.includes('.')) &&
        < span id='errorMessage' className='h-0 text-red-700'>Por favor solo dígite números enteros de 4 digitos</span>
        }
      <div className='flex flex-row mb-3 mt-8'>
        <h1 className='text-3xl font-extrabold text-center text-gray-700'>Resultado:</h1>
        {(result) &&
          <h1 id='result' className='ml-5 text-3xl font-extrabold text-center text-gray-900'>{result}</h1>
        }
      </div>
      <div className='flex flex-row mb-3 mt-1'>
        <h1 className='text-xl font-extrabold text-center text-gray-700'>Attemps</h1>
        {(attemps!==0) &&
          <h1 id='attemps' className='ml-5 text-xl font-extrabold text-center text-gray-700'>{attemps}</h1>
        }
      </div>
      <button id='reset_button' 
      className='mt-16 px-3 py-3 h-12 font-medium text-white bg-blue-600 rounded-lg'
      onClick={resetGame}
      >RESET SECRET</button>
    </div>
    </div >
  );
}

export default App;
