import * as React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

interface Props {
  content: string,
  duration?: number,
  onClose?: Function
}

function Template(props: Props) {
  const {
    content
  } = props;

  return (
    <div className='zec-toast'>
      <div className='content'>{content}</div>
    </div>
  );
}

const div = document.createElement('div');
let isOnly = true;
let timer:any = null;

function Toast(props: Props) {
  const {
    content,
    duration,
    onClose = () => {}
  } = props;

  const remove = () => {
    timer = setTimeout(() => {
      document.body.removeChild(div);
      onClose();
      isOnly = true;
    }, duration || 20000)
  };

  const add = () => {
    document.body.appendChild(div);
    ReactDOM.render(<Template content={content} />, div);
    isOnly = false;
    remove();
  };

  if(isOnly) {
    add();
  } else {
    document.body.removeChild(div);
    clearTimeout(timer);
    isOnly = true;
    add();
  }
}

export default Toast;
