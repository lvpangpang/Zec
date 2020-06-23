import { createElement } from 'react';
import TouchFeedback from 'rmc-feedback';
import '../index-9d68b195.js';
import '../style-inject.es-1f59c1d0.js';
import { I as Icon } from '../index-39086b78.js';
import '../index-a6436576.js';

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

export default List;
