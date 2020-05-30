import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';

import './index.styl';

interface Props {

  // 类型
  type?: 'number' | 'text',

  // 当前值
  value?: any,
  
  // 默认显示
  placeholder?: string,

  // 清空
  hasClear?: boolean,

  // 只读
  readonly?: boolean
  
}

function Input(props: Props, parentRef: any) {
  const { value, placeholder, type, hasClear, readonly } = props;

  let [_value, _setValue] = React.useState(value);

  useImperativeHandle(parentRef, () => {
    return {
      value: _value
    }
  });
 
  return(
    <div className='pp-input'>
      <input
        type={type || 'text'}
        className='input'
        value={_value}
        placeholder={placeholder}
        onChange={(e) => {
          _setValue(e.target.value.trim());
        }}
        readOnly={readonly}
      />
      {
        hasClear && _value && <span className='clear-btn' onClick={() => _setValue('')}>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="889" width="10" height="10"><path d="M512 457.6L905.6 64l54.336 54.336-393.6 393.6L960 905.6l-54.4 54.4L512 566.336 118.4 960 64 905.6 457.6 512 64 118.336 118.336 64l393.6 393.6z" p-id="890"></path></svg>
        </span>
      }
    </div>
  );
}
export default forwardRef(Input);

