import {
    createElement
} from 'react';
import TouchFeedback from 'rmc-feedback';
import '../index-9d68b195.js';
import '../style-inject.es-1f59c1d0.js';
import {
    I as Icon
} from '../index-39086b78.js';
import '../index-9e66fb76.js';

function Button(props) {
    var children = props.children,
        className = props.className,
        _a = props.disabled,
        disabled = _a === void 0 ? false : _a,
        _b = props.onClick,
        onClick = _b === void 0 ? function () {} : _b,
        _c = props.loading,
        loading = _c === void 0 ? false : _c,
        _d = props.type,
        type = _d === void 0 ? 'primary' : _d,
        inline = props.inline;
    var _e = props.style,
        style = _e === void 0 ? {} : _e;
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
        style = Object.assign({}, style, {
            'display': 'inline-block'
        });
    }
    return (createElement("div", {
            style: style,
            className: "zec-button " + (className || ''),
            onClick: _onClick
        },
        createElement(TouchFeedback, {
                activeClassName: !disabled ? 'zec-button-active' : ''
            },
            createElement("div", {
                    className: "zec-button-inner zec-button-" + type + " " + ((disabled || loading) ? 'zec-button-disable' : '')
                },
                loading === true && createElement("span", {
                        className: 'loading-right'
                    },
                    createElement(Icon, {
                        type: 'loading',
                        size: 'sm'
                    })),
                children))));
}

export default Button;