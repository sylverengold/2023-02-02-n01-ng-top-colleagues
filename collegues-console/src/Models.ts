export type ListCollegue = {
    pseudo: string,
    photo: string,
    score: number
}
export class Collegue {
    private _pseudo: string;
    private _last: string;
    private _first: string;
    private _photo: string;
    private _score: number;

    constructor(pseudo: string, last: string, first: string, photo: string, score: number){
            this._pseudo = pseudo;
            this._last=last;
            this._photo=photo;
            this._first=first;
            this._score=score;
        }

    getPseudo(): string {
        return this._pseudo;
    }

    setPseudo(value: string) {
        this._pseudo = value;
    }

    getLast(): string {
        return this._last;
    }

    setLast(value: string) {
        this._last = value;
    }

    getFirst(): string {
        return this._first;
    }

    setFirst(value: string) {
        this._first = value;
    }

    getPhoto(): string {
        return this._photo;
    }

    setPhoto(value: string) {
        this._photo = value;
    }

    getScore(): number {
        return this._score;
    }

    setScore(value: number) {
        this._score = value;
    }
}

//"pseudo":"phyhpy",
//    "last":"PERVIT-MONSLYP",
//    "first":"Jean-Philippe",
 //   "photo":"https://randomuser.me/api/portraits/men/85.jpg",
//    "score":100