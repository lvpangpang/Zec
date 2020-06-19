import { createElement } from 'react';
import { s as svgSprite } from './index-983b5da0.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

function Icon(props) {
    var type = props.type, _a = props.size, size = _a === void 0 ? 'md' : _a, color = props.color;
    return (createElement("div", { className: 'zec-icon' },
        createElement("div", { className: "zec-icon-" + size, dangerouslySetInnerHTML: { __html: svgSprite(type) } })));
}

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-button {\n  font-size: 16px;\n  color: #fff;\n}\n.zec-button-inner {\n  border-radius: 5px;\n  text-align: center;\n  padding: 14px 20px;\n}\n.zec-button-active {\n  color: #ddd !important;\n  opacity: 0.8;\n}\n.zec-button-primary {\n  background: #108ee9;\n}\n.zec-button-warning {\n  background: #ffc600;\n}\n.zec-button-success {\n  background: #6abf47;\n}\n.zec-button-error {\n  background: #f4333c;\n}\n.zec-button-disable {\n  opacity: 0.3;\n}\n.zec-button .loading-right {\n  margin-right: 6px;\n}\n";
styleInject(css_248z);

export { Icon as I };
