import React from 'react'
import ReactDOM from 'react-dom/client'
import './less/main.less'

import ScanningLamp from './components/ScanningLamp'
import ScanText from './components/ScanText'

const parts = new Array(30).fill(null).map(() => String(Math.floor(Math.random() * 999999)).padStart(6, '0'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h3>文字扫描</h3>
    123<ScanText style={{color: 'white', margin: '0 12px'}} color='#000'>Hello ScanText!!!</ScanText>123
    <h3>探照灯效果</h3>
    <ScanningLamp>
      <div className='ScanningLamp-demo'>
        {parts.map((item, idx) => <div
          className='item'
          key={idx}
          style={{width: `${item.slice(4)}px`, height: `${item.slice(4)}px`, background:`#${item}`}}
        ></div>)}
      </div>

      <p>this is a words.</p>
      <h1>this is a words.</h1>
    </ScanningLamp>
  </React.StrictMode>,
)
