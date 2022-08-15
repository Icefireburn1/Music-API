import { Artist } from "../models/Artist";
import { Album } from "../models/Album";
import { Track } from "../models/Track";

import * as mysql from "mysql";
import * as util from "util";

export class MusicDAO
{
    private pool: mysql.Pool;

    constructor(host:string, port:number, username:string, password:string)
    {
        this.pool = mysql.createPool({
            host: host,
            port: port,
            user: username,
            password: password,
            database: 'music'
        });
    }

    public findAlbums(artist:string, callback: any) 
    {
        let albums:Album[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ARTIST=?', [artist]);
            for (let x =0; x < result1.length; ++x)
            {
                let albumId = result1[x].ID;
                let tracks:Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                for (let y=0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, tracks, result1[x].IMAGE_NAME));
            }
            callback(albums);
        });
    }

    public findArtists(callback: any)
    {
        let artists:Artist[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM');
            for (let x =0; x < result1.length; ++x)
            {
                artists.push(new Artist(result1[x].ID,result1[x].ARTIST));
            }
            callback(artists);
        });
    }

    public findAllAlbums(callback: any)
    {
        let albums:Album[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM');
            for (let x =0; x < result1.length; ++x)
            {
                albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].TRACKS, result1[x].IMAGE));
            }

            callback(albums);
        });
    }

    public findAlbumByID(albumId:number, callback: any) 
    {
        let albums:Album[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ID=?', albumId);

            callback(new Album(result1[0].ID, result1[0].TITLE, result1[0].ARTIST, result1[0].DESCRIPTION, result1[0].YEAR, result1[0].TRACKS, result1[0].IMAGE));
        });
    }
    
    public findAlbumByNameAndID(name:string, albumId:number, callback: any) 
    {
        let albums:Album[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ID=? AND ARTIST=?', [albumId, name]);

            callback(new Album(result1[0].ID, result1[0].TITLE, result1[0].ARTIST, result1[0].DESCRIPTION, result1[0].YEAR, result1[0].TRACKS, result1[0].IMAGE));
        });
    }

    public findAlbumsByArtist(search:string, callback:any) 
    {
        let albums:Album[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('SELECT * FROM ALBUM WHERE ARTIST=?', [search]);
            for (let x =0; x < result1.length; ++x)
            {
                let albumId = result1[x].ID;
                let tracks:Track[] = [];
                let result2 = await connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                for (let y=0; y < result2.length; ++y)
                {
                    tracks.push(new Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }

                albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].TRACKS, result1[x].IMAGE));
            }

            callback(albums);
        });
    }

    public findAlbumsByDescription(search:string, callback:any)
    {
        let albums:Album[] = [];

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query("SELECT * FROM ALBUM WHERE DESCRIPTION LIKE ?", ['%'+search+'%']);
            for (let x =0; x < result1.length; ++x)
            {

                albums.push(new Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].TRACKS, result1[x].IMAGE));
            }

            callback(albums);
        });
    }

    public create(album:Album, callback:any)
    {
        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query("INSERT INTO `album`(`ID`, `TITLE`, `ARTIST`, `YEAR`, `DESCRIPTION`) VALUES (?,?,?,?,?)", [album.Id, album.Title, album.Artist, album.Year, album.Description]);

            if (result1 == undefined) 
            {
                callback(-1);
            }
            else 
            {
                callback(1);
            }
            
        });
    }

    public update(album:Album, callback:any)
    {

        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);

            var sql = "UPDATE `album` SET ID=?,TITLE=?,ARTIST=?,YEAR=?,DESCRIPTION=? WHERE ID=?";

            var data = [Number(album.Id), album.Title, album.Artist, Number(album.Year), album.Description, Number(album.Id)];

            let result1 = await connection.query(sql, data);

            console.log('Rows affected:', result1.affectedRows);

            callback(result1.affectedRows);
            
        });
    }

    public delete(artist:string, target:number, callback: any)
    {
        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);

            var sqlTracks = "DELETE FROM track WHERE ALBUM_ID=?";
            var sql = "DELETE FROM album WHERE ID=? AND ARTIST=?";

            var dataTracks = [sqlTracks];
            var data = [Number(target), artist];

            let result = await connection.query(sqlTracks, dataTracks);
            let result1 = await connection.query(sql, data);

            console.log('Rows affected:', result1.affectedRows);

            callback(result1.affectedRows);
        });
    }
}

