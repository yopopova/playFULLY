import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (albums) => html`
    <section id="catalogPage">
        ${albums.length === 0 ? html`
            <p id="no-albums">No albums in catalog</p>` : 
        albums.map(album => albumCardTemplate(album, hasUser))}
    </section>`

const albumCardTemplate = (album, hasUser) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="album-info">
                <p class="name"><span>Name: </span>Melodrama</p>
                <p class="artist"><span>Artist: </span>Lorde</p>
                <p class="genre"><span>Genre: </span>Pop Music</p>
                <p class="price"><span>Price: </span>$7.33</p>
                <p class="date"><span>Release Date: </span>June 16, 2017</p>
            </div>

            ${hasUser ? html`
                <div class="btn-group">
                    <a href="/details/${album._id}" id="details">Details</a>
                </div>`
            : nothing}
        </div>
    </div>`

export async function showCatalog(ctx) {
    const albums = await getAll();
    ctx.render(catalogTemplate([]));
}