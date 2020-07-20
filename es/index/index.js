import { createElement, useState, Children, cloneElement } from 'react';
import TouchFeedback from 'rmc-feedback';
import '../index-9d68b195.js';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import { I as Icon } from '../index-39086b78.js';
export { I as Icon } from '../index-39086b78.js';
import '../index-9e66fb76.js';
import ReactDOM from 'react-dom';
import '../index-b97a91d7.js';
import '../index-a91c0d82.js';
import '../index-a6436576.js';
import '../index-6d37696c.js';
import { _ as __spreadArrays } from '../index-fe7c809b.js';

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
            createElement("div", { className: "zec-button-inner zec-button-" + type + " " + ((disabled || loading) ? 'zec-button-disable' : '') },
                loading === true && createElement("span", { className: 'loading-right' },
                    createElement(Icon, { type: 'loading', size: 'sm' })),
                children))));
}

function Loading(props) {
    var style = props.style;
    return (createElement("div", { className: 'zec-loading' },
        createElement("div", { className: "spinner" },
            createElement("div", { className: "double-bounce1", style: style }),
            createElement("div", { className: "double-bounce2", style: style }))));
}
var div = document.createElement('div');
var index = {
    show: function (style) {
        document.body.appendChild(div);
        ReactDOM.render(createElement(Loading, { style: style }), div);
    },
    hide: function () {
        document.body.removeChild(div);
    }
};

function Template(props) {
    var content = props.content, mask = props.mask;
    return (createElement("div", { className: 'zec-toast', style: mask ? { width: '100%', height: '100%' } : {} },
        createElement("div", { className: 'content' }, content)));
}
var isToast = false;
var div$1 = document.createElement('div');
var timer = null;
function Toast(props) {
    var content = props.content, duration = props.duration, _a = props.mask, mask = _a === void 0 ? true : _a, _b = props.onClose, onClose = _b === void 0 ? function () { } : _b;
    var remove = function () {
        timer = setTimeout(function () {
            document.body.removeChild(div$1);
            onClose();
            isToast = false;
        }, duration || 2000);
    };
    var add = function () {
        document.body.appendChild(div$1);
        ReactDOM.render(createElement(Template, { content: content, mask: mask }), div$1);
        isToast = true;
        remove();
    };
    if (!isToast) {
        add();
    }
    else {
        document.body.removeChild(div$1);
        clearTimeout(timer);
        isToast = false;
        add();
    }
}
var index$1 = {
    info: function (props) {
        Toast(props);
    },
    hide: function () {
        if (isToast) {
            document.body.removeChild(div$1);
            clearTimeout(timer);
            isToast = false;
        }
    }
};

function List(props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, leftMainText = props.leftMainText, leftextraText = props.leftextraText, rightMainText = props.rightMainText, onClick = props.onClick;
    return (createElement("div", { className: "zec-list " + className, onClick: onClick || function () { } },
        createElement(TouchFeedback, { activeClassName: onClick ? 'touch-active' : '' },
            createElement("div", { className: 'zec-list-inner' },
                createElement("div", { className: 'left-main' },
                    createElement("p", null, leftMainText),
                    createElement("p", { className: 'extra-text' }, leftextraText)),
                createElement("div", { className: 'right-main' }, onClick ? createElement(Icon, { type: 'right', size: 'sm' }) : rightMainText)))));
}

function Radio(props) {
    var children = props.children, value = props.value, _a = props.onChange, onChange = _a === void 0 ? function () { } : _a;
    var _b = useState(value), radioValue = _b[0], setRadioValue = _b[1];
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

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-switch {\n  height: 48px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n  border-bottom: 1px solid #ddd;\n}\n.zec-switch .zec-name {\n  width: 50%;\n}\n.zec-switch .zec-conetnt {\n  width: 40%;\n}\n.zec-switch .switch {\n  position: relative;\n  width: 51px;\n  height: 31px;\n  z-index: 0;\n  -webkit-appearance: none;\n  border-radius: 31px;\n  background: #e5e5e5;\n  margin: 0px;\n  padding: 0px;\n  border-width: 0px;\n  border-style: initial;\n  border-color: initial;\n  border-image: initial;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n}\n.zec-switch .switch::after,\n.zec-switch .switch::before {\n  content: '';\n  position: absolute;\n  left: 1.5px;\n  top: 1.5px;\n  height: 28px;\n  border-radius: 28px;\n  background: #ffffff;\n  transition: all 0.2s ease 0s;\n}\n.zec-switch .switch::before {\n  width: 48px;\n  box-sizing: border-box;\n  z-index: 1;\n  transform: scale(1);\n}\n.zec-switch .switch::after {\n  width: 28px;\n  z-index: 2;\n  transform: translateX(0px);\n  box-shadow: rgba(0, 0, 0, 0.21) 2px 2px 4px;\n}\n.zec-switch .switch-active {\n  background: #4dd865;\n}\n.zec-switch .switch-active::before {\n  transform: scale(0);\n}\n.zec-switch .switch-active::after {\n  transform: translateX(20px);\n}\n.zec-switch .switch-disbled {\n  opacity: 0.3;\n}\n";
styleInject(css_248z);

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

export { Button, Checkbox, List, index as Loading, Radio, Switch, index$1 as Toast };
