import { useState, createElement, Children, cloneElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-6d37696c.js';

function Radio(props) {
    var children = props.children, value = props.value, onChange = props.onChange;
    var _a = useState(value), radioValue = _a[0], setRadioValue = _a[1];
    return (createElement("div", null, Children.map(children, function (child) {
        return cloneElement(child, {
            label: child.props.children,
            value: child.props.value,
            radioValue: radioValue,
            disabled: child.props.disabled,
            onClick: function () {
                var cValue = child.props.value;
                setRadioValue(cValue);
                onChange(cValue);
            }
        });
    })));
}
function RadioItem(props) {
    var value = props.value, label = props.label, radioValue = props.radioValue, disabled = props.disabled, onClick = props.onClick;
    return (createElement("div", { className: "zec-radio " + (disabled ? 'zec-radio-disabled' : ''), onClick: function () { if (!disabled) {
            onClick(value);
        } } },
        createElement("div", { className: "content" },
            createElement("div", { className: "circle " + ((radioValue === value && !disabled) ? 'active' : '') + " " },
                createElement("div", { className: "fork" })),
            createElement("div", { className: "label" }, label))));
}
Radio.RadioItem = RadioItem;

export default Radio;
