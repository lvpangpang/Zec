import { s as styleInject } from './style-inject.es-1f59c1d0.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-checkbox-box {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.zec-checkbox-box .zec-checkbox {\n  position: relative;\n  height: 48px;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0px 15px;\n  font-size: 16px;\n  overflow: hidden;\n}\n.zec-checkbox-box .zec-checkbox:active {\n  background-color: #ddd;\n}\n.zec-checkbox-box .zec-checkbox .content {\n  width: 100%;\n}\n.zec-checkbox-box .zec-checkbox .content .circle {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  background-color: #fff;\n  position: relative;\n  vertical-align: middle;\n}\n.zec-checkbox-box .zec-checkbox .content .active {\n  background-color: #108ee9;\n  border-color: #108ee9;\n}\n.zec-checkbox-box .zec-checkbox .content .active .fork {\n  height: 12px;\n  width: 5px;\n  border-right: 1.5px solid #fff;\n  border-bottom: 1.5px solid #fff;\n  position: absolute;\n  top: 44%;\n  left: 51%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.zec-checkbox-box .zec-checkbox .content .label {\n  vertical-align: middle;\n  margin-left: 10px;\n  display: inline-block;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n}\n.zec-checkbox-box .zec-checkbox .content:after {\n  content: '';\n  position: absolute;\n  left: 48px;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  background: #ddd;\n}\n.zec-checkbox-box .zec-checkbox:last-child {\n  border-bottom: none;\n}\n.zec-checkbox-box .zec-checkbox-disabled {\n  color: #bbb;\n}\n.zec-checkbox-box .zec-checkbox:last-child .content:after {\n  height: 0;\n}\n";
styleInject(css_248z);

export { __spreadArrays as _ };
