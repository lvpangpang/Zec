import { createElement } from 'react';
import TouchFeedback from 'rmc-feedback';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-button {\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  color: #fff;\n}\n.zec-button-inner {\n  height: 100%;\n  border-radius: 5px;\n  text-align: center;\n  padding: 0 20px;\n}\n.zec-button-active {\n  color: #ddd !important;\n  opacity: 0.8;\n}\n.zec-button-primary {\n  background: #108ee9;\n}\n.zec-button-warning {\n  background: #ffc600;\n}\n.zec-button-success {\n  background: #6abf47;\n}\n.zec-button-error {\n  background: #f4333c;\n}\n.zec-button-disable {\n  opacity: 0.3;\n}\n";
styleInject(css_248z);

function Button(props) {
    var children = props.children, className = props.className, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.onClick, onClick = _b === void 0 ? function () { } : _b, _c = props.loading, loading = _c === void 0 ? false : _c, _d = props.type, type = _d === void 0 ? 'primary' : _d, inline = props.inline;
    var _e = props.style, style = _e === void 0 ? {} : _e;
    var isClick = false;
    var _onClick = function () {
        if (!disabled) {
            if (!isClick) {
                isClick = true;
                setTimeout(function () {
                    isClick = false;
                }, 500);
                onClick();
            }
        }
    };
    if (inline) {
        style = Object.assign({}, style, { 'display': 'inline-block' });
    }
    return (createElement("div", { style: style, className: "zec-button " + (className || ''), onClick: _onClick },
        createElement(TouchFeedback, { activeClassName: !disabled ? 'zec-button-active' : '' },
            createElement("div", { className: "zec-button-inner zec-button-" + type + " " + (disabled ? 'zec-button-disable' : '') },
                loading === true && '...',
                children))));
}

export default Button;
