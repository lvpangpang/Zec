import * as React from 'react';
import './index.styl';

interface Props {

  // 是否显示（默认为否）
  show?: boolean,

  // 关闭组件
  setShow?: Function,
  
  // 标题
  title?: string, 

  // 内容
  info?: any,

  // 按钮组(最多2个, 可以没有)
  btnList?: [
    {
      name: string,
      event: () => void; 
    }
  ]
}

function Alert(props: Props) {

  const { show, setShow, title, info, btnList } = props;

  // 默认的按钮组数
  let defaultBtnList = [
    {
      name: '确定',
      event: () => {
        
      }
    }
  ];

  const hideEvent = (event?: Function) => {
    setShow && setShow(false);
    if (event) {
      event();
    }
  };

  if (btnList) {
    defaultBtnList = btnList;
  }

  if (!show) return null;

  return (
    <div className='pp-alert'>
      <div className='content-box'>
        <div className='title'>{title}</div>
        <div className='info'>{info}</div>
        <div className={btnList && btnList.length > 1 ? 'btn-box pp-one-top-line buttonNum-2' : 'btn-box pp-one-top-line'}>
          {
            defaultBtnList && defaultBtnList.slice(0, 2).map((item, index) => {
              return (
                <div className={index === 0 ? 'btn-item' : 'btn-item pp-one-left-line'} onClick={ () => { hideEvent(item.event) } }>{item.name}</div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Alert;

