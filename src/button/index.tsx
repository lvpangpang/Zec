import * as React from 'react';
import './index.less';

interface Props {

  // 内容
  html?: any,

  // 样式
  className?: string,

  // 按钮是否被🚫
  disabled?: boolean,

  // 点击回调的事件
  onClick?: React.EventHandler<React.MouseEvent>
  
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
  
  const { type='primary', disabled=false, children, onClick=() => {} } = props;

  return (
    <div className='zec-button' onClick={ !disabled && onClick}>
      <div className={`zec-${disabled ? 'disabled' : type}`}>
        {children}
      </div>
    </div>
  );
}

export default Button;