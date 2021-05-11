var database,canvas;
var game,form,player;
var gameState=0,playerCount=0;

function setup(){
     canvas=createCanvas(400,400);
    database = firebase.database();
    console.log(database);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
  if(playerCount===4){
      game.update(1)
  }
    
}
if(gameState===1){
    clear();
    game.play();
}



