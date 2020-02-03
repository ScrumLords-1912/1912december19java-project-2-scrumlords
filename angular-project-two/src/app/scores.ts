export class Scores {
    user_id: number;
    game_id: number;
    score: number;
    datetime: string;

    constructor(id: number, gameId: number, score: number, datetime: string) {
        this.user_id = id;
        this.game_id = gameId;
        this.score = score;
        this.datetime = datetime;
    }
}