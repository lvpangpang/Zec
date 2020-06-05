import * as React from 'react';
import './index.less';

interface Props {
  children: any

  // 样式
  className?: string,

  // 按钮是否被🚫
  disabled?: boolean,

  // 点击回调的事件
  onClick?: Function,
  
  // loading
  loading?: boolean,

  // 超链接
  href?: string,

  // 主题
  type?: 'primary' | 'success' | 'error' | 'warning',

  // 样式
  style?: string,

  // 大小
  size?: 'small' | 'large'
}

function Button(props: Props) {
  
  const {
    children,
    className,
    disabled=false,
    onClick=() => {},
    loading=false,
    href,
    type='primary',
    style={},
    size
  } = props;

  const _onClick = () => {
    if(!disabled) {
      onClick();
    }
  };

  return (
    <div style={style} className={`zec-button ${className || ''}`} onClick={_onClick}>
      <div className={`zec-button-inner zec-button-${type}`}>
        {children}
      </div>
    </div>
  );
}

export default Button;