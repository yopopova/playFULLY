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
- Lit
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