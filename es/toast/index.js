import { forwardRef, useState, useRef, useImperativeHandle, createElement } from 'react';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';

var css_248z = ".pp-toast {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.pp-toast .toast-box {\n  max-width: 198px;\n  min-width: 56px;\n  display: table;\n  padding: 8px 30px;\n  border-radius: 4px;\n  background-color: rgba(0,0,0,0.85);\n  font-size: 14px;\n  line-height: 22px;\n  color: #fff;\n  text-align: center;\n}\n.pp-toast .pp-toast-fade-in {\n  opacity: 1;\n  animation: fadein 0.4s ease-in;\n  -webkit-animation: fadein 0.4s ease-in;\n}\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.pp-toast-show {\n  display: -webkit-flex;\n}\n";
styleInject(css_248z);

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
