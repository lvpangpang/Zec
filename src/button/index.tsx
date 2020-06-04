import * as React from 'react';
import './index.less';

interface Props {

  // 主题 默认为primary
  type?: 'primary' | 'success' | 'error' | 'warning',

  // 按钮是否被🚫
  disabled?: boolean,
  
  // 内容
  children?: any,

  // 点击回调的事件
  click?: React.EventHandler<React.MouseEvent>
}

function Button(props: Props) {
  
  const { type='primary', disabled=false, children } = props;

  return (
    <div className='zec-button' onClick={ !disabled ? props.click : function() {}}>
      <div className={`zec-${disabled ? 'disabled' : type}`}>
        {children}
      </div>
    </div>
  );
}

export default Button;