import sys from './.module.less'

type TProp = React.HTMLAttributes<HTMLDivElement> & {
  /** 文字 */
  children: string;
  /** 活跃颜色 */
  color?: string;
}

export default ({
  children,
  color = 'white',
  ...attrs
}: TProp) => {
  return <div className={sys.spotlight} {...attrs}>
    <span>{children}</span>
    <span className={sys['spotlight-clip-content']} style={{color}}>{children}</span>
  </div>
}
