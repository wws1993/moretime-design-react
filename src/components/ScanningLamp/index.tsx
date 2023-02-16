import { useState } from 'react'
import classnames from 'classnames'
import useMount from '@/hooks/useMount'
import sys from './.module.less'

export default ({children, className}: Base.props) => {
  const [val, setVal] = useState(0)

  useMount(() => {
    const underlyingRef = document.querySelector(`.${sys.view}`) as HTMLDivElement
    const coverRef = document.querySelector(`.${sys.clip}`) as HTMLDivElement

    underlyingRef.addEventListener('mousemove', ev => {
      const x = ev.pageX - underlyingRef.offsetLeft;
      const y = ev.pageY - underlyingRef.offsetTop;

      const left = (x / underlyingRef.clientWidth * 100).toFixed(2) + '%'
      const top = (y / underlyingRef.clientHeight * 100).toFixed(2) + '%'
      coverRef.style.setProperty('--poi-top', top)
      coverRef.style.setProperty('--poi-left', left)
    })
    underlyingRef.addEventListener('mouseleave', () => {
      coverRef.style.setProperty('--poi-top', '-800%')
      coverRef.style.setProperty('--poi-left', '-800%')
    })
  })

  return <div className={classnames(sys.view, className)}>
    <div className={sys.container}>{children}</div>
    <div className={sys.clip}>{children}</div>
  </div>
}