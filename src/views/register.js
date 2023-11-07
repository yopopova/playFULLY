import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`
    <section id="login">
        <form @submit=${onRegister}>
            <fieldset>
                <legend>Registration</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="email@example.com">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="*********">

                <label for="conf-pass" class="vhide">Confirm Password</label>
                <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="*********">

                <button type="submit" class="register">Register</button>

                <p class="field">
                    <span>Do you already have a profile? <a href="#">Login</a></span>
                </p>
            </fieldset>
        </form>
    </section>`

export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        if (!data.email || !data.password || !data['conf-pass']) {
            return alert('All fields are required!');
        }

        if (data.password !== data['conf-pass']) {
            return alert("Passwords don't match!");
        }

        await register(data.email, data.password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}