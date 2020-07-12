import { useState, createElement, Children, cloneElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import { _ as __spreadArrays } from '../index-fe7c809b.js';

function Checkbox(props) {
    var children = props.children, value = props.value, _a = props.onChange, onChange = _a === void 0 ? function () { } : _a;
    var _b = useState(value), checkboxValue = _b[0], setCheckboxValue = _b[1];
    return (createElement("div", { className: 'zec-checkbox-box' }, Children.map(children, function (child) {
        return cloneElement(child, {
            label: child.props.children,
            value: child.props.value,
            checkboxValue: checkboxValue,
            disabled: child.props.disabled,
            onClick: function () {
                var cValue = child.props.value;
                var newData = __spreadArrays(checkboxValue);
                if (newData.indexOf(cValue) !== -1) {
                    newData.splice(checkboxValue.indexOf(cValue), 1);
                }
                else {
                    newData.push(cValue);
                }
                setCheckboxValue(newData);
                onChange(newData);
            }
        });
    })));
}
function CheckboxItem(props) {
    var value = props.value, label = props.label, checkboxValue = props.checkboxValue, disabled = props.disabled, onClick = props.onClick;
    return (createElement("div", { className: "zec-checkbox " + (disabled ? 'zec-checkbox-disabled' : ''), onClick: function () { if (!disabled) {
            onClick();
        } } },
        createElement("div", { className: "content" },
            createElement("div", { className: "circle " + ((checkboxValue.indexOf(value) !== -1 && !disabled) ? 'active' : '') + " " },
                createElement("div", { className: "fork" })),
            createElement("div", { className: "label" }, label))));
}
Checkbox.CheckboxItem = CheckboxItem;

export default Checkbox;
