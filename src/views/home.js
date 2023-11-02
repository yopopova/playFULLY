import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
    <section id="home-page">
        <div id="home-info">
            <h1><span>Play</span> <span>your favorite music</span> <span>fully</span></h1>
        </div>
    </section>`

export function showHome(ctx) {
    ctx.render(homeTemplate());
}