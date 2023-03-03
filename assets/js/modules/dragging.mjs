// Dragging logic

import { log } from "./helpers.mjs";

const drag = (element) => {
    element.addEventListener("drag", (e) => {
        log(e.target.innerText);
    });
};

const over = (element) => {
    element.addEventListener("dragover", (e) => {
        e.preventDefault();
        log(e.target);
    });
};

const enter = (element) => {
    element.addEventListener("dragenter", (e) => {
        log(e.target);
    });
};

const leave = (element) => {
    element.addEventListener("dragleave", (e) => {
        log(e.target);
    });
};

const start = (element) => {
    element.addEventListener("dragstart", (e) => {
        log(e.target);
    });
};

const drop = (element) => {
    element.addEventListener("drop", (e) => {
        log(e.target);
    });
};

const end = (element) => {
    element.addEventListener("dragend", (e) => {
        log(e.target);
    });
};

export {
    drag,
    over,
    enter,
    leave,
    start,
    drop,
    end
}