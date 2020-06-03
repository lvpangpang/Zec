import { forwardRef, useState, useRef, useImperativeHandle, createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import '../index-e93fce8f.js';

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

export default index;
