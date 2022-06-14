import {wrapToVdom} from "./utils";

function createElement(type, config, ...children) {
    if (config) {
        delete config.__self;
        delete config.__source;  // 删除__self和__source属性,babel会自动添加
    }
    // debugger
    const props = Object.assign({}, config);
    if (children.length > 1) {
        props.children = children.map(wrapToVdom);
    } else if (children.length === 1) {
        props.children = wrapToVdom(children[0]);
    } else {
        props.children = null;
    }
    return {
        type,
        props
    }
}

const React = {
    createElement
}

export default React;
