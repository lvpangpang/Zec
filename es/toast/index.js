import { createElement } from 'react';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import ReactDOM from 'react-dom';

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-toast {\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n.zec-toast .content {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 9px 12px;\n  -webkit-transform: translate(-50%, -50%);\n}\n";
styleInject(css_248z);

function Template(props) {
    var content = props.content;
    return (createElement("div", { className: 'zec-toast' },
        createElement("div", { className: 'content' }, content)));
}
var div = document.createElement('div');
var isOnly = true;
var timer = null;
function Toast(props) {
    var content = props.content, duration = props.duration, _a = props.onClose, onClose = _a === void 0 ? function () { } : _a;
    var remove = function () {
        timer = setTimeout(function () {
            document.body.removeChild(div);
            onClose();
            isOnly = true;
        }, duration || 20000);
    };
    var add = function () {
        document.body.appendChild(div);
        ReactDOM.render(createElement(Template, { content: content }), div);
        isOnly = false;
        remove();
    };
    if (isOnly) {
        add();
    }
    else {
        document.body.removeChild(div);
        clearTimeout(timer);
        isOnly = true;
        add();
    }
}

export default Toast;
