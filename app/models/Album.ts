import { Track } from "./Track";

export class Album 
{
    private id: number = -1;
    public get Id(): number {
        return this.id;
    }
    public set Id(value: number) {
        this.id = value;
    }
    private title: string = "";
    public get Title(): string {
        return this.title;
    }
    public set Title(value: string) {
        this.title = value;
    }
    private artist: string = "";
    public get Artist(): string {
        return this.artist;
    }
    public set Artist(value: string) {
        this.artist = value;
    }
    private description: string = "";
    public get Description(): string {
        return this.description;
    }
    public set Description(value: string) {
        this.description = value;
    }
    private year: number = -1;
    public get Year(): number {
        return this.year;
    }
    public set Year(value: number) {
        this.year = value;
    }
    private tracks: Track[];
    public get Tracks(): Track[] {
        return this.tracks;
    }
    public set Tracks(value: Track[]) {
        this.tracks = value;
    }
    private image: string;
    public get Image(): string {
        return this.image;
    }
    public set Image(value: string) {
        this.image = value;
    }

    constructor(id:number, title:string, artist:string, description:string, year:number, tracks:Track[], image:string)
    {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.description = description;
        this.year = year;
        this.tracks = tracks;
        this.image = image;
    }


}