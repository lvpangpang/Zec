import { createElement } from 'react';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';

var css_248z = ".pp-button {\n  height: 44px;\n  line-height: 44px;\n  color: $text-color;\n  text-align: center;\n  border-radius: $border-radius;\n}\n.pp-button .pp-primary {\n  color: #fff;\n  background-color: #00f;\n}\n.pp-button .pp-success {\n  color: #fff;\n  background-color: #008000;\n}\n.pp-button .pp-warning {\n  color: #fff;\n  background-color: $warning-text-color;\n}\n.pp-button .pp-error {\n  color: #fff;\n  background-color: $error-text-color;\n}\n.pp-button .pp-disabled {\n  color: $disable-text-color;\n  background: $disable-background-color;\n}\n";
styleInject(css_248z);

function Button(props) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, children = props.children;
    return (createElement("div", { className: 'pp-button', onClick: !disabled ? props.click : function () { } },
        createElement("div", { className: "pp-" + (disabled ? 'disabled' : type) }, children)));
}

export default Button;
