import { html, render } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = () => html`
    <nav>
        <div id="logo">
            <a href="/">
                <img src="./../images/logo.png" alt="playfully-logo">
            </a>
        </div>

        <div id="app-nav">
            <ul id="nav-menu">
                <!--All users-->
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/search">Search</a></li>

                <!--Only guest-->
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>

                <!--Only user-->
                <li><a href="/create">Create Album</a></li>
                <li><a href="javascript:void(0)">Logout</a></li>
            </ul>
        </div>

        <div id="hamburger-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>`