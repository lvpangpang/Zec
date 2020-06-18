import { createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import ReactDOM from 'react-dom';
import '../index-dadfd656.js';

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
