import { createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-9174b2b4.js';

function Button(props) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, children = props.children;
    return (createElement("div", { className: 'pp-button', onClick: !disabled ? props.click : function () { } },
        createElement("div", { className: "pp-" + (disabled ? 'disabled' : type) }, children)));
}

export default Button;
