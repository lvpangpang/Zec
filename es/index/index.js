import { createElement, forwardRef, useState, useRef, useImperativeHandle } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-9174b2b4.js';
import '../index-50125fed.js';
import '../index-e93fce8f.js';
import '../index-111c84ed.js';

function Button(props) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, children = props.children;
    return (createElement("div", { className: 'pp-button', onClick: !disabled ? props.click : function () { } },
        createElement("div", { className: "pp-" + (disabled ? 'disabled' : type) }, children)));
}

function Alert(props) {
    var show = props.show, setShow = props.setShow, title = props.title, info = props.info, btnList = props.btnList;
    // 默认的按钮组数
    var defaultBtnList = [
        {
            name: '确定',
            event: function () {
            }
        }
    ];
    var hideEvent = function (event) {
        setShow && setShow(false);
        if (event) {
            event();
        }
    };
    if (btnList) {
        defaultBtnList = btnList;
    }
    if (!show)
        return null;
    return (createElement("div", { className: 'pp-alert' },
        createElement("div", { className: 'content-box' },
            createElement("div", { className: 'title' }, title),
            createElement("div", { className: 'info' }, info),
            createElement("div", { className: btnList && btnList.length > 1 ? 'btn-box pp-one-top-line buttonNum-2' : 'btn-box pp-one-top-line' }, defaultBtnList && defaultBtnList.slice(0, 2).map(function (item, index) {
                return (createElement("div", { className: index === 0 ? 'btn-item' : 'btn-item pp-one-left-line', onClick: function () { hideEvent(item.event); } }, item.name));
            })))));
}

function Toast(props, ref) {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var _b = useState(''), text = _b[0], setText = _b[1];
    var mapRef = useRef(null);
    // 子组件对外暴露的方法,最终父组件要调用子组件的方法都是通用ref
    useImperativeHandle(ref, function () {
        return {
            set: function (val) {
                setShow(true);
                setText(val);
                setTimeout(function () {
                    setShow(false);
                }, 3500);
            }
        };
    });
    return (createElement("div", { className: show ? 'pp-toast pp-toast-show' : 'pp-toast', ref: mapRef },
        createElement("div", { className: "toast-box pp-toast-fade-in" }, text)));
}
var index = forwardRef(Toast);

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
var index$1 = forwardRef(Input);

export { Alert, Button, index$1 as Input, index as Toast };
