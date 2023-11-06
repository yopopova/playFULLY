import { html } from "../../node_modules/lit-html/lit-html.js";

const loginTemplate = () => html`
    <section id="login">
        <form>
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