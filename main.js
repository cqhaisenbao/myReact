import React from "./lib/react";
import ReactDOM from "./lib/reactDom";

const x = React.createElement("div", {
    className: 'title',
    style: {
        color: 'red'
    }
}, React.createElement("h1", null, "Hello World"))

ReactDOM.render(x, document.getElementById('app'));
