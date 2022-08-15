export class Track 
{
    private id: number = -1;
    public get Id(): number {
        return this.id;
    }
    public set Id(value: number) {
        this.id = value;
    }
    private number: number = -1;
    public get Number(): number {
        return this.number;
    }
    public set Number(value: number) {
        this.number = value;
    }
    private title: string = "";
    public get Title(): string {
        return this.title;
    }
    public set Title(value: string) {
        this.title = value;
    }
    private lyrics: string = "";
    public get Lyrics(): string {
        return this.lyrics;
    }
    public set Lyrics(value: string) {
        this.lyrics = value;
    }

    constructor(id:number, number:number, title:string, lyrics: string) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.lyrics = lyrics;
    }
}