import { createElement } from 'react';
import '../style-inject.es-1f59c1d0.js';
import ReactDOM from 'react-dom';
import '../index-b97a91d7.js';

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

export default index;
