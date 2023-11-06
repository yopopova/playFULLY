import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const catalogTemplate = () => html`
 <section id="catalogPage">

<div class="card-box">
    <img src="./../images/BrandiCarlile.png">
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

<div class="card-box">
    <img src="./../images/pinkFloyd.jpg">
    <div>
        <div class="album-info">
            <p class="name"><span>Name: </span>The Dark Side of the Moon</p>
            <p class="artist"><span>Artist: </span>Pink Floyd</p>
            <p class="genre"><span>Genre: </span>Rock Music</p>
            <p class="price"><span>Price: </span>$28.75</p>
            <p class="date"><span>Release Date: </span>March 1, 1973</p>
        </div>
        <div class="details-btn">
            <a href="#" id="details">Details</a>
        </div>
    </div>
</div>

<div class="card-box">
    <img src="./../images/Lorde.jpg">
    <div>
        <div class="album-info">
            <p class="name"><span>Name: </span>Melodrama</p>
            <p class="artist"><span>Artist: </span>Lorde</p>
            <p class="genre"><span>Genre: </span>Pop Music</p>
            <p class="price"><span>Price: </span>$7.33</p>
            <p class="date"><span>Release Date: </span>June 16, 2017</p>
        </div>
        <div class="details-btn">
            <a href="#" id="details">Details</a>
        </div>
    </div>
</div>

<!--No albums in catalog-->
<p id="no-albums">No albums in catalog</p>

</section>`

export async function showCatalog(ctx) {
    ctx.render(catalogTemplate());
}