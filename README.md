# playFULLY

'playFULLY' is a single-page music application where the user can find or add his favorite music albums. Based on client-side rendering the app includes different types of views and functionalities such as:

- `Catalog` view which contains all available albums
- `Search` view where the user can search for albums
- `Create Album` view where the user can add an album
- `Details` view where the user can see every album's details
- `Edit Album` view where the user can edit an album, if he is the owner
- `Delete Album` option where the user can delete an album, if he is the owner
- `Register` view where the user can make registration
- `Login` view where the user can log into his profile
- `Logout` option where the user can logout from his profile

## App Details

The app is based on:

- JavaScript
- RESTful API
- lit-html
- page
- HTML & CSS
- Gradient Magic Backgrounds

## Database

Please, note that the application has no database, and app data is not persistent. The DB is based on a local server by [Viktor Kostadinov](https://github.com/viktorpts). Every album record in the database has the following structure:

```javascript
let seedData = {
    albums: {
        "albumId": {
            "_ownerId": "ownerId",
            "name": "Album Name",
            "artist": "Artist Name",
            "genre": "Album Genre",
            "imgUrl": "/images/albumImage.png",
            "price": "Album Price",
            "releaseDate": "Release Date",
            "description": "Album Description",
            "_createdOn": 0101010101,
        }
    }
}
```

## RESTful API

For the app data, the following endpoints are supported:

- `GET /data/albums` - to get all the records from the database
- `POST /data/albums` - to create an album
- `PUT /data/albums/:id` - to edit an album
- `DELETE /data/albums/:id` - to delete an album
- `GET /data/albums + query string` - to search in the catalog

For the user, the following endpoints are supported:

- `POST /users/register` - for user registration
- `POST /users/login` - for user login
- `GET /users/logout` - for user logout

The included REST service comes with the following premade user accounts, which you may use for login:

```javascript
{
    "email": "peter@abv.bg",
    "password": "123456" 
}
```

and

```javascript
{
    "email": "john@abv.bg",
    "password": "123456" 
}
```

## App Views

![playFULLY_screenshots](https://github.com/yopopova/playFULLY/assets/59256039/a95131c4-8034-4f0b-86df-c43daf12d245)

<!-- Desktop View -->
<!-- ![playFULLY-desktop](https://github.com/yopopova/playFULLY/assets/59256039/37e464a4-bead-4536-836e-6a24456cfe83) -->

<!-- Mobile View -->
<!-- ![playFULLY-mobile](https://github.com/yopopova/playFULLY/assets/59256039/9bdd3446-0e32-4f7b-838c-686066c79206) -->