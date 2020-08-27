import { useState, createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-93def554.js';

function Input(props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, placeholder = props.placeholder, _b = props.type, type = _b === void 0 ? 'text' : _b, value = props.value, disabled = props.disabled, maxLength = props.maxLength, _c = props.onChange, onChange = _c === void 0 ? function (val) { } : _c;
    var _d = useState(value), myValue = _d[0], setMyValue = _d[1];
    var myChange = function (e) {
        var value = e.target.value;
        setMyValue(value);
        onChange(value);
    };
    return (createElement("div", { className: "zec-input " + className },
        createElement("input", { className: 'input', placeholder: placeholder, type: type, maxLength: maxLength, value: myValue, disabled: disabled, onChange: myChange })));
}

export default Input;
