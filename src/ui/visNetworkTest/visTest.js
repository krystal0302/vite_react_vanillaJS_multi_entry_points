import '@assets//css/style.css'
import javascriptLogo from '@assets//img/javascript.svg'
import viteLogo from '@assets//img/vite.svg'
import { setupCounter } from './counter2.js'

import React from 'react'
import { createRoot } from 'react-dom/client';
import CustomBack from '@/components/CustomBack';
import CustomAnchor from '@/components/CustomAnchor';

document.querySelector('#app').innerHTML = `

  <div id="wrapper"></div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vis NetWork!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <div id="mynetwork"></div>
`

function ComponentRoot() {
  return (
    <div className='row'>
      <CustomBack />
    </div>
  )
}

const root = createRoot(document.getElementById('wrapper'));
root.render(<ComponentRoot />);

setupCounter(document.querySelector('#counter'))
