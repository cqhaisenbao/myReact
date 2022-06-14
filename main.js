import React from "./lib/react";
import ReactDOM from "./lib/reactDom";
import Welcome from "./Welcome";

const element = React.createElement(Welcome, {name: "luff"});
console.log(element);
// const x = React.createElement("div", {
//     className: 'title',
//     style: {
//         color: 'red'
//     }
// }, React.createElement("h1", null, "Hello World"))

ReactDOM.render(element, document.getElementById('app'));
