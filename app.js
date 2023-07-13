let golfGames = {
  tournament: "The Masters",
  players:
    [
      { name: "T. Woods", age: 37 },
      { name: "P. Mickelson", age: 43 }
    ],
  showAllGames: function () {
    currObject = this;
    this.players.forEach(function (player) {
      console.log(player.name + ' is playing at ' + currObject.tournament);
    })
  }
}

golfGames.showAllGames();

function setBodyTextColor(color) {
  this.body.style.color = color;
}

document.setBodyTextColor = setBodyTextColor;
document.setBodyTextColor("green");
document.setBodyTextColor("blue");

function getBodyTextColor() {
  return this.body.style.color;
}

document.getBodyTextColor = getBodyTextColor;
console.log(document.getBodyTextColor());