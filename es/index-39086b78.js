import { createElement } from 'react';
import { s as svgSprite } from './index-9d68b195.js';

function Icon(props) {
    var type = props.type, _a = props.size, size = _a === void 0 ? 'md' : _a, color = props.color;
    return (createElement("div", { className: 'zec-icon' },
        createElement("div", { className: "zec-icon-" + size, dangerouslySetInnerHTML: { __html: svgSprite(type) } })));
}

export { Icon as I };
