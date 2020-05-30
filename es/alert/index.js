import { createElement } from 'react';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';

var css_248z = ".pp-alert {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform-style: preserve-3d;\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: rgba(0,0,0,0.6);\n}\n.pp-alert .content-box {\n  position: fixed;\n  z-index: 1000;\n  background-color: #fff;\n  border-radius: 4px;\n  width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  top: 26%;\n}\n.pp-alert .title {\n  line-height: 26px;\n  padding-top: 24px;\n  text-align: center;\n  width: 100%;\n  color: #262626;\n  font-size: 18px;\n  font-weight: bold;\n}\n.pp-alert .info {\n  color: #262626;\n  font-size: 15px;\n  line-height: 22px;\n  padding: 12px 25px 24px;\n  text-align: center;\n  max-height: 280px;\n  overflow-y: auto;\n}\n.pp-alert .info::-webkit-scrollbar {\n  display: none;\n}\n.pp-alert .btn-item {\n  width: 100%;\n  height: 52px;\n  line-height: 52px;\n  text-align: center;\n  color: #262626;\n  font-size: 16px;\n}\n.pp-alert .buttonNum-2 {\n  display: flex;\n  display: -webkit-flex;\n}\n.pp-alert .buttonNum-2 .btn-item {\n  flex: 1;\n  -webkit-flex: 1;\n}\n";
styleInject(css_248z);

function Alert(props) {
    var show = props.show, setShow = props.setShow, title = props.title, info = props.info, btnList = props.btnList;
    // 默认的按钮组数
    var defaultBtnList = [
        {
            name: '确定',
            event: function () {
            }
        }
    ];
    var hideEvent = function (event) {
        setShow && setShow(false);
        if (event) {
            event();
        }
    };
    if (btnList) {
        defaultBtnList = btnList;
    }
    if (!show)
        return null;
    return (createElement("div", { className: 'pp-alert' },
        createElement("div", { className: 'content-box' },
            createElement("div", { className: 'title' }, title),
            createElement("div", { className: 'info' }, info),
            createElement("div", { className: btnList && btnList.length > 1 ? 'btn-box pp-one-top-line buttonNum-2' : 'btn-box pp-one-top-line' }, defaultBtnList && defaultBtnList.slice(0, 2).map(function (item, index) {
                return (createElement("div", { className: index === 0 ? 'btn-item' : 'btn-item pp-one-left-line', onClick: function () { hideEvent(item.event); } }, item.name));
            })))));
}

export default Alert;
