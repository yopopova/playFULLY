import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (albums, hasUser) => html`
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
                <p class="name"><span>Name: </span>${album.name}</p>
                <p class="artist"><span>Artist: </span>${album.artist}</p>
                <p class="genre"><span>Genre: </span>${album.genre}</p>
                <p class="price"><span>Price: </span>$${album.price}</p>
                <p class="date"><span>Release Date: </span>${album.releaseDate}</p>
            </div>

            ${hasUser ? html`
                <div class="details-btn">
                    <a href="/details/${album._id}" id="details">Details</a>
                </div>`
            : nothing}
        </div>
    </div>`

export async function showCatalog(ctx) {
    const albums = await getAll();
    ctx.render(catalogTemplate(albums, !!ctx.user));
}