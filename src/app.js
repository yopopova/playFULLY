import { render } from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';

import { updateNav } from "./views/nav.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showLogin } from "./views/login.js";

const main = document.querySelector('main');

page(decorateContext);
page('/index.html', '/');
page('/', showHome);

page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));

page('/create', () => console.log('create'));
page('/login', showLogin);
page('/register', () => console.log('register'));

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(content) {
    render(content, main);
}