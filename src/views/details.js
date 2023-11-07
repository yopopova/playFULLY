import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteById, getById } from "../api/data.js";

const detailsTemplate = (album, isOwner, onDelete) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src=${album.imgUrl}>
            </div>

            <div class="albumInfo">
                <div class="albumText">
                    <h1>${album.name}</h1>
                    <p><span>Artist:</span> ${album.artist}</p>
                    <p><span>Genre:</span> ${album.genre}</p>
                    <p><span>Price:</span> $${album.price}</p>
                    <p><span>Date:</span> ${album.releaseDate}</p>
                    <p><span>Description:</span> ${album.description}</p>
                </div>

                 ${isOwner ? html`
                 <div class="actionBtn">
                     <a href="/edit/${album._id}" class="edit">Edit</a>
                     <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                 </div>` : nothing}
            </div>
        </div>
    </section>`

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);
    const isOwner = album._ownerId === ctx.user._id;

    ctx.render(detailsTemplate(album, isOwner, onDelete));

    async function onDelete() {
        const choise = confirm('Are you sure you want to delete this album?');

        if (choise) {
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
}