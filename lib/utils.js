import {REACT_TEXT} from "./constant";

export function wrapToVdom(vdom) {
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        return {
            type: REACT_TEXT,
            props: {
                content: vdom
            }
        };
    } else {
        return vdom;
    }
}
