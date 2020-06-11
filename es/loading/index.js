import { createElement } from 'react';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import ReactDOM from 'react-dom';

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-loading {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.zec-loading .spinner {\n  position: fixed;\n  z-index: 1000;\n  left: 50%;\n  top: 50%;\n  margin: -30px 0 0 -30px;\n  width: 60px;\n  height: 60px;\n}\n.zec-loading .double-bounce1,\n.zec-loading .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: skio-bounce 2s infinite ease-in-out;\n  animation: skio-bounce 2s infinite ease-in-out;\n}\n.zec-loading .double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes skio-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n";
styleInject(css_248z);

function Loading(props) {
    var style = props.style;
    return (createElement("div", { className: 'zec-loading' },
        createElement("div", { className: "spinner" },
            createElement("div", { className: "double-bounce1", style: style }),
            createElement("div", { className: "double-bounce2", style: style }))));
}
var div = document.createElement('div');
var index = {
    show: function (style) {
        document.body.appendChild(div);
        ReactDOM.render(createElement(Loading, { style: style }), div);
    },
    hide: function () {
        document.body.removeChild(div);
    }
};

export default index;
