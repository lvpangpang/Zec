import { createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-50125fed.js';

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
