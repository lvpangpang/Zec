import { createElement } from 'react';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import ReactDOM from 'react-dom';

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-toast {\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n.zec-toast .content {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 9px 12px;\n  -webkit-transform: translate(-50%, -50%);\n}\n";
styleInject(css_248z);

function Template(props) {
    var content = props.content, mask = props.mask;
    return (createElement("div", { className: 'zec-toast', style: mask ? { width: '100%', height: '100%' } : {} },
        createElement("div", { className: 'content' }, content)));
}
var isToast = false;
var div = document.createElement('div');
var timer = null;
function Toast(props) {
    var content = props.content, duration = props.duration, _a = props.mask, mask = _a === void 0 ? true : _a, _b = props.onClose, onClose = _b === void 0 ? function () { } : _b;
    var remove = function () {
        timer = setTimeout(function () {
            document.body.removeChild(div);
            onClose();
            isToast = false;
        }, duration || 2000);
    };
    var add = function () {
        document.body.appendChild(div);
        ReactDOM.render(createElement(Template, { content: content, mask: mask }), div);
        isToast = true;
        remove();
    };
    if (!isToast) {
        add();
    }
    else {
        document.body.removeChild(div);
        clearTimeout(timer);
        isToast = false;
        add();
    }
}
var index = {
    info: function (props) {
        Toast(props);
    },
    hide: function () {
        if (isToast) {
            document.body.removeChild(div);
            clearTimeout(timer);
            isToast = false;
        }
    }
};

export default index;
