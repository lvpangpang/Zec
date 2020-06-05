import { createElement } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* 文字色 */\n/* 文字大小 */\n/* 主题色 */\n/* 圆角 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-button {\n  height: 24px;\n  line-height: 24px;\n  font-size: 16px;\n  color: #fff;\n}\n.zec-button-inner {\n  height: 100%;\n  padding: 9px 8px;\n  border-radius: 2px;\n  text-align: center;\n}\n.zec-button-primary {\n  background: #108ee9;\n}\n";
styleInject(css_248z);

function Button(props) {
    var children = props.children, className = props.className, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.onClick, onClick = _b === void 0 ? function () { } : _b, _c = props.loading, href = props.href, _d = props.type, type = _d === void 0 ? 'primary' : _d, _e = props.style, style = _e === void 0 ? {} : _e, size = props.size;
    var _onClick = function () {
        if (!disabled) {
            onClick();
        }
    };
    return (createElement("div", { style: style, className: "zec-button " + (className || ''), onClick: _onClick },
        createElement("div", { className: "zec-button-inner zec-button-" + type }, children)));
}

export default Button;
