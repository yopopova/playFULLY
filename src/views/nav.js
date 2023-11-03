import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';

import { getUserData } from "../util.js";
import { logout } from '../api/user.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
    <nav>
        <div id="logo">
            <a href="/">
                <img src="./../images/logo.png" alt="playfully-logo">
            </a>
        </div>

        <div id="app-nav">
            <ul id="nav-menu">
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/search">Search</a></li>

                ${hasUser ? html`
                <li><a href="/create">Create Album</a></li>
                <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`
                 : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`
            }
            </ul>
        </div>

        <div id="hamburger-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>`

export function updateNav() {
    const user = getUserData();
    render(navTemplate(user), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}