import * as React from 'react';
import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import './index.styl';

function Toast(props:any, ref:any) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const mapRef = useRef(null);

  // 子组件对外暴露的方法,最终父组件要调用子组件的方法都是通用ref
  useImperativeHandle(ref, () => {
    return {
      set(val:string) {
        setShow(true);
        setText(val);
        setTimeout(() => {
          setShow(false);
        }, 3500);
      }
    }
  })

  return (
    <div className={show ? 'pp-toast pp-toast-show' : 'pp-toast'} ref={mapRef}>
      <div className="toast-box pp-toast-fade-in">{text}</div>
    </div>
  );
}


export default forwardRef(Toast);