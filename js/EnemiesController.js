class EnemiesController{

 constructor(x ,y ,sprite ,configs){
    this.sprite= Nakama.game.add.sprite(x, y, 'assets', sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds= true;  // khong chay ra khoi map
    this.c=0;
  }

 update(){
  var r=Math.random()*6;
  this.c=(this.c+r)%160;
    if(this.c>80){
     this.sprite.body.velocity.x = -EnemiesController.SHIP_SPEED; //left
    }
   else{

     this.sprite.body.velocity.x = EnemiesController.SHIP_SPEED; //right
    }


}
}
 EnemiesController.SHIP_SPEED= 400;
