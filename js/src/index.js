import { MiniMap } from './core/miniMap.js';

let miniMap = new MiniMap();

window.setup = () => {
    createCanvas(miniMap.windowWidth, miniMap.windowHeight);
}

window.draw = () => {
    miniMap.render();
}
