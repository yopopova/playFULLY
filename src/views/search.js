import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { searchAlbum } from "../api/data.js";

const searchTemplate = () => html`
    <section id="searchPage">
        <h1>Search album by name:</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter album name">
            <button class="button-list">Search</button>
        </div>

        <h2>Results:</h2>

        <!--Show after click Search button-->
        <div class="search-result">
            <!--If have matches-->
            <div class="card-box">
                <img src="../images/BrandiCarlile.png">
                <div>
                    <div class="album-info">
                        <p class="name"><span>Name: </span>In These Silent Days</p>
                        <p class="artist"><span>Artist: </span>Brandi Carlile</p>
                        <p class="genre"><span>Genre: </span>Low Country Sound Music</p>
                        <p class="price"><span>Price: </span>$12.80</p>
                        <p class="date"><span>Release Date: </span>October 1, 2021</p>
                    </div>
                    <div class="details-btn">
                        <a href="#" id="details">Details</a>
                    </div>
                </div>
            </div>

            <!--If there are no matches-->
            <p class="no-result">No result</p>
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