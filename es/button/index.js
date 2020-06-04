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

var css_248z = ".zec-button {\n  background: red;\n}\n";
styleInject(css_248z);

function Button(props) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, children = props.children;
    return (createElement("div", { className: 'zec-button', onClick: !disabled ? props.click : function () { } },
        createElement("div", { className: "zec-" + (disabled ? 'disabled' : type) }, children)));
}

export default Button;
