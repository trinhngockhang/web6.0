var Nakama = {};

var c=0;
Nakama.configs = {
  GAME_WIDTH  :640,
  GAME_HEIGHT :960,
  MIN_WIDTH   :320,
  MIN_HEIGHT  :480,
  MAX_HEIGHT  :960 ,
  PLAYER1_POS : {
    x :200,
    y :800
  },
  PLAYER2_POS : {
    x :400,
    y :800
  },
  ENEMY1_POS :  {
    x: 340,
    y :100,
  }
};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;
  Nakama.game.add.sprite(0,0,'background');

  Nakama.players= [];
  Nakama.players.push(
    new ShipController(
      Nakama.configs.PLAYER1_POS.x,
      Nakama.configs.PLAYER1_POS.y,
      "Spaceship1-Player.png",
      {
        up: Phaser.Keyboard.UP,
        down: Phaser.Keyboard.DOWN,
        left: Phaser.Keyboard.LEFT,
        right: Phaser.Keyboard.RIGHT,
        fire : Phaser.Keyboard.ENTER
      }
    )

  );
  Nakama.players.push(
    new ShipController(
      Nakama.configs.PLAYER2_POS.x,
      Nakama.configs.PLAYER2_POS.y,
      "Spaceship1-Partner.png",
      {
        up: Phaser.Keyboard.W,
        down: Phaser.Keyboard.S,
        left: Phaser.Keyboard.A,
        right: Phaser.Keyboard.D,
        fire : Phaser.Keyboard.SPACEBAR
      }
    )
  );

  Nakama.enemies= [];
  Nakama.enemies.push(
    new EnemiesController(
      Nakama.configs.ENEMY1_POS.x,
      Nakama.configs.ENEMY1_POS.y,
      "EnemyType3.png",
      {

      }
    )
  );


}

// update game state each frame
  var update = function(){

  Nakama.players.forEach(function(ship){
     ship.update();
  }
);

  Nakama.enemies.forEach(function(enemy){
    var r = Math.random()*6;
    c=(c+r)%160;
    if(c<80){
           enemy.update1();  //left
          }
        else{
           enemy.update2(); //right
          }
      }
  );

}

// before camera render
var render = function(){}
