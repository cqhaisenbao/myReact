import {REACT_TEXT} from "./constant";

function render(element, container) {
    const newDom = createDom(element);
    container.appendChild(newDom);
}

function createDom(vDom) {
    const {type, props} = vDom;
    let newDom
    if (type === REACT_TEXT) {
        newDom = document.createTextNode(props.content);
    } else {
        newDom = document.createElement(type);
    }
    if (props) {
        updateProps(newDom, {}, props);  // 根据虚拟DOM的属性，更新真实DOM的属性
    }
    vDom.dom = newDom;
    return newDom;
}

function updateProps(dom, oldProps, newProps) {
    for (let key in newProps) {
        if (key === 'children') {
            childrenHandle(newProps[key], dom);
        } else if (key === 'style') {
            let styleObj = newProps[key];
            for (let styleKey in styleObj) {
                dom.style[styleKey] = styleObj[styleKey];
            }
        } else {
            dom[key] = newProps[key];
        }
    }
}

function childrenHandle(children, dom) {
    if (Array.isArray(children)) {
        reconcileChildren(dom, children);  // 如果是数组，则遍历每一个子元素，并渲染
    } else {
        render(children, dom);  // 如果是单个虚拟DOM，直接渲染
    }
}

function reconcileChildren(dom, newChildren) {
    for (let i = 0; i < newChildren.length; i++) {
        let newChild = newChildren[i];
        render(newChild, dom);
    }
}

const ReactDOM = {
    render
}

export default ReactDOM;
