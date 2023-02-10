import { useEffect, useState } from 'react'
import sys from './.module.less'
import useMount from '@/hooks/useMount'

type IProps = {
  children: React.ReactNode
}

export default ({children}: IProps) => {
  const [val, setVal] = useState(0)

  useMount(() => {
    const underlyingRef = document.querySelector(`.${sys.container}`) as HTMLDivElement
    const coverRef = document.querySelector(`.${sys.clip}`) as HTMLDivElement

    underlyingRef.addEventListener('mousemove', ev => {
      const left = (ev.offsetX / underlyingRef.clientWidth * 100).toFixed(2) + '%'
      const top = (ev.offsetY / underlyingRef.clientHeight * 100).toFixed(2) + '%'
      coverRef.style.setProperty('--poi-top', top)
      coverRef.style.setProperty('--poi-left', left)
    })
    underlyingRef.addEventListener('mouseleave', () => {
      coverRef.style.setProperty('--poi-top', '50%')
      coverRef.style.setProperty('--poi-left', '50%')
    })
  })

  return <div className={sys.view}>
    <div className={sys.container}>{children}</div>
    <div className={sys.clip}>{children}</div>
  </div>
}