import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { searchAlbum } from "../api/data.js";

const searchTemplate = (isClicked, handler, albums, hasUser) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${handler} class="button-list">Search</button>
        </div>

        <h2>Results:</h2>

        <div class="search-result">
            ${isClicked ? createResultTemplate(albums, hasUser) : nothing}
        </div>
    </section>`

export async function showSearch(ctx) {
    ctx.render(searchTemplate(false, onSearch));

    async function onSearch(event) {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;

        if(!query) {
            return alert('Enter some word');
        }

        const albums = await searchAlbum(query);

        ctx.render(searchTemplate(true, onSearch, albums, !!ctx.user));
    }
}