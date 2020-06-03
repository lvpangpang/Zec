import { forwardRef, useState, useImperativeHandle, createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-111c84ed.js';

function Input(props, parentRef) {
    var value = props.value, placeholder = props.placeholder, type = props.type, hasClear = props.hasClear, readonly = props.readonly;
    var _a = useState(value), _value = _a[0], _setValue = _a[1];
    useImperativeHandle(parentRef, function () {
        return {
            value: _value
        };
    });
    return (createElement("div", { className: 'pp-input' },
        createElement("input", { type: type || 'text', className: 'input', value: _value, placeholder: placeholder, onChange: function (e) {
                _setValue(e.target.value.trim());
            }, readOnly: readonly }),
        hasClear && _value && createElement("span", { className: 'clear-btn', onClick: function () { return _setValue(''); } },
            createElement("svg", { viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "889", width: "10", height: "10" },
                createElement("path", { d: "M512 457.6L905.6 64l54.336 54.336-393.6 393.6L960 905.6l-54.4 54.4L512 566.336 118.4 960 64 905.6 457.6 512 64 118.336 118.336 64l393.6 393.6z", "p-id": "890" })))));
}
var index = forwardRef(Input);

export default index;
