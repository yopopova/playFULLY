import { html } from "../../node_modules/lit-html/lit-html.js";
import { editAlbum, getById } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = () => html`
    <section id="login">
        <form>
            <fieldset>
                <legend>Edit Album</legend>

                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value="In These Silent Days">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="./img/BrandiCarlile.png">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value="12.80">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="October 1, 2021">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value="Brandi Carlile">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value="Low Country Sound Music">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10"
                    cols="10">Upon release, In These Silent Days received positive reviews from critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream critics, the album has an average score of 87 out of 100, which indicates 'universal acclaim'.</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </fieldset>
        </form>
    </section>`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);

    ctx.render(editTemplate(album, createSubmitHandler(onEdit)));

    async function onEdit({ name, imgUrl, price, releaseDate, artist, genre, description }, form) {
        if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
            return alert('All fields are required!');
        }

        await editAlbum(id, {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        })

        form.reset();
        ctx.page.redirect('/details/' + id);
    }
}