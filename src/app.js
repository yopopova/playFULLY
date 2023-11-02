import { render } from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';

import { showHome } from "./views/home.js";

const main = document.getElementById('main-content');

page(decorateContext);
page('/index.html', '/');
page('/', showHome);

page('/catalog', () => console.log('catalog'));
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));

page('/create', () => console.log('create'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    next();
}

function renderMain(content) {
    render(content, main);
}