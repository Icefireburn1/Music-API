const { Album } = require('./lib/app/models/Album')
const { Track } = require('./lib/app/models/Track');
const { MusicDAO } = require('./lib/app/database/MusicDAO.js');

const bodyParser = require('body-parser');

const express = require("express");
const app = express();
const port = 3000;
app.get('/', function (_req, res)
{
    res.send('This is the default root Route.');
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.listen(port, () => {
    console.log("Example app listening on port " + port + "!");
});

const dbHost = "localhost";
const dbPort = 3306;
const dbUsername = "root";
const dbPassword = "root";

var musicDAO = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);

app.use(express.static('app/images'));

app.get('/albums/search/description/:descr', function (_req, res) {
    musicDAO.findAlbumsByDescription(_req.params.descr, (data) => {
        return res.json(data);
    });
});

app.get('/albums/:artist', function (_req, res) {
    musicDAO.findAlbums(_req.params.artist, (data) => {
        return res.json(data);
    });
});

app.get('/albums/search/artist/:search', function (_req, res) {
    musicDAO.findAlbumsByArtist(_req.params.search, (data) => {
        return res.json(data);
    });
});

app.get('/artists', function (_req, res) {
    musicDAO.findArtists((data) => {
        return res.json(data);
    });
});

app.get('/albums', function (_req, res) {
    musicDAO.findAllAlbums((data) => {
        return res.json(data);
    });
});

app.get('/album/:albumId', function (_req, res) {
    var id = Number(_req.params.albumId);

    musicDAO.findAlbumByID(id, (data) => {
        return res.json(data);
    });
});

app.get('/album/:name/:albumId', function (_req, res) {
    var id = Number(_req.params.albumId);
    var name = _req.params.name;

    musicDAO.findAlbumByNameAndID(name, id, (data) => {
        return res.json(data);
    });
});

app.post('/albums', function(req, res) {
    console.log('In POST /albums Route with Post of ' + JSON.stringify(req.query));
    if (!req.query.title)
    {
        res.status(400).json({error: "Invalid Album Posted"})
    }
    else
    {
        let album = new Album(req.query.id, req.query.title, req.query.artist, req.query.description, req.query.year);

        musicDAO.create(album, function (albumId){
            if (albumId == -1) {
                res.status(200).json({"error": "Creating album failed."});
            }
            else {
                res.status(200).json({"success": "Creating Album passed with an Album ID of " + req.query.id});
            }
        });
    }
});

app.put('/albums', function (req, res) {

    let album = new Album(req.body.id, req.body.title, req.body.artist, req.body.description, req.body.year);
    musicDAO.update(album, function (data) {
        if (data <= 0) {
            res.status(200).json({"error": "Update album failed."});
        }
        else {
            res.status(200).json({"success": "Affected " + data + " rows."});
        }
    });
});

app.delete('/albums/:artist/:id', function (req, res) {


    musicDAO.delete(req.params.artist, Number(req.params.id), function (data) {
        if (data <= 0) {
            res.status(200).json({"error": "Delete album failed."});
        }
        else {
            res.status(200).json({"success": "Affected " + data + " rows."});
        }
    });
});