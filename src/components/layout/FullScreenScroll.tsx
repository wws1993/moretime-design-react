import { useMounted } from '@/hooks';
import sys from '@less/modules/FullScreenScroll.module.less'
import React, { WheelEventHandler } from 'react';

interface Item {
  /** 元素滚动方向，vertical垂直，horizontal水平，默认垂直方向  */
  direction?: 'vertical'|'horizontal',
  /**  */
  node: React.ReactNode
}
interface IProp extends Base.props {
  showPoint?: boolean;
  items: (React.ReactNode | Item)[];
}

export default ({
  items,
  showPoint = false,
  ...props
}: IProp) => {
  const onScroll: WheelEventHandler<HTMLDivElement> = ev => {
    // console.log(ev.);
  }

  useMounted(() => {})

  return <div {...props} onWheel={onScroll}>
    {items.map((k, idx) => {
      let node: React.ReactNode

      if (Object.hasOwn(k as object, 'node')) {
        const _ = k as Item;
        const style: React.CSSProperties = {}

        _.direction === 'horizontal' ? style.overflowX = 'auto' : undefined
        _.direction === 'vertical' ? style.overflowY = 'auto' : undefined

        node = <div className={sys.page} key={idx} style={style}>{_.node}</div>
      } else node = <div className={sys.page} key={idx} style={{overflowY: 'auto'}}>{k as React.ReactNode}</div>

      return node
    })}
  </div>
}