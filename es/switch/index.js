import { useState, createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-a0ac6e57.js';

function Switch(props) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, _c = props.color, color = _c === void 0 ? '#4dd865' : _c, name = props.name, _d = props.onChange, onChange = _d === void 0 ? function () { } : _d;
    var _e = useState(checked), isChecked = _e[0], setIsChecked = _e[1];
    return (createElement("div", { className: 'zec-switch' },
        createElement("div", { className: 'zec-name' }, name),
        createElement("div", { className: 'zec-content' },
            createElement("div", { style: { background: isChecked ? color : '' }, className: "switch " + (isChecked ? 'switch-active' : '') + " " + (disabled ?
                    'switch-disbled' : ''), onClick: function () {
                    if (!disabled) {
                        setIsChecked(!isChecked);
                        onChange(!isChecked);
                    }
                } }))));
}

export default Switch;
