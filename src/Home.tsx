import React from 'react'
import ReactDOM from 'react-dom/client'
import FullScreenScroll from './components/layout/FullScreenScroll'

import sys from '@less/modules/Home.module.less';

import ScanNode from './components/vision/ScanNode'
import ScanText from './components/vision/ScanText'

const parts = new Array(30).fill(null).map(() => String(Math.floor(Math.random() * 999999)).padStart(6, '0'))

const ViewByWelcome = () => <div className={sys.page}>
  <h1>@moretime/design-react</h1>
  <h4>闲暇，让工作更轻松，让您闲下来喝杯茶~</h4>
</div>
const ViewByScanText = () => <div className={sys.page}>
  <h3>文字扫描</h3>
  <ScanText style={{color: '#000', margin: '0 12px'}} color='red'>
    <h1>Hello ScanText!!!</h1>
  </ScanText>
</div>
const ViewByScanNode = () => <div className={sys.page}>
  <h3>探照灯效果</h3>
  <ScanNode className={sys.ScanNode}>
    <div className={sys.ScanNode_view}>
      {parts.map((item, idx) => <div
        className={sys.ScanNode_view_item}
        key={idx}
        onClick={() => console.log(item)}
        style={{width: `${item.slice(4)}px`, height: `${item.slice(4)}px`, background:`#${item}`}}
      ></div>)}
    </div>

    <p>this is a words.</p>
    <h1>this is a words.</h1>
  </ScanNode>
</div>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FullScreenScroll
      className={sys.view}
      items={[
        <ViewByWelcome />,
        <ViewByScanText />,
        <ViewByScanNode />,
        {direction: 'horizontal', node: <div className={sys.page}>test</div>}
      ]}
    />
  </React.StrictMode>,
)
