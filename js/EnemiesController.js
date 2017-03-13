class EnemiesController{

 constructor(x ,y ,sprite ,configs){
    this.sprite= Nakama.game.add.sprite(x, y, 'assets', sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds= true;  // khong chay ra khoi map

   }

 update1(){

     this.sprite.body.velocity.x = -EnemiesController.SHIP_SPEED; //left

   }
 update2(){

     this.sprite.body.velocity.x = EnemiesController.SHIP_SPEED; //right
 }


}

 EnemiesController.SHIP_SPEED= 400;
