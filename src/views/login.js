import { html } from "../../node_modules/lit-html/lit-html.js";

import { login } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
    <section id="login">
        <form @submit=${onLogin}>
            <fieldset>
                <legend>Login</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="email@example.com">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="*********">

                <button type="submit" class="login">Login</button>

                <p class="field">
                    <span>You don't have a profile? <a href="/register">Register</a></span>
                </p>
            </fieldset>
        </form>
    </section>`

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {
        if(email == '' || password == '') {
            return alert('All fields are required!');
        }

        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}