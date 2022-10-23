const team = {
  _players: [
    {firstName: 'Roger', lastName: 'Bishop', age: 23},
    {firstName: 'Anita', lastName: 'Jones', age: 27},
    {firstName: 'James', lastName: 'King', age: 24}
  ],
  _games: [
    {opponent: 'Jets', teamPoints: 32, opponentPoints: 23},
    {opponent: 'Giants', teamPoints: 45, opponentPoints: 12},
    {opponent: 'Eagles', teamPoints: 21, opponentPoints: 15}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newteamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newteamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
