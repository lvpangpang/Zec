import { createElement, useState, Children, cloneElement } from 'react';
import TouchFeedback from 'rmc-feedback';
import '../index-9d68b195.js';
import '../style-inject.es-1f59c1d0.js';
import { I as Icon } from '../index-39086b78.js';
export { I as Icon } from '../index-39086b78.js';
import '../index-9e66fb76.js';
import ReactDOM from 'react-dom';
import '../index-b97a91d7.js';
import '../index-a91c0d82.js';
import '../index-a6436576.js';
import '../index-6d37696c.js';

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

export { Button, List, index as Loading, Radio, index$1 as Toast };
