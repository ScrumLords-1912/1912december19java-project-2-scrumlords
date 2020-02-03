export class Scores {
    user_id: number;
    game_id: number;
    score: number;
    name: string; //ommitted, search by user id to get username
}

export const MOCK_SCORES = [
    {score: 1123,name: "bob"},
    {score: 2445, name: "joe"},
    {score: 1835, name: "phil"},
    {score: 1799, name: "jason"},
    {score: 3221, name: "Xxnoob_slayerxX"}
];