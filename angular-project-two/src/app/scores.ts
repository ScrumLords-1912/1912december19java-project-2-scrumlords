export class Scores {
    id: number
    user_id: number;
    game_id: number;
    score: number;
    datetime: string;

    constructor(id: number, user_id: number, gameId: number, score: number, datetime: string) {
        this.id = id;
        this.user_id = id;
        this.game_id = gameId;
        this.score = score;
        this.datetime = datetime;
    }
}