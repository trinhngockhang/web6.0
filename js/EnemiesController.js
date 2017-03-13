class EnemiesController{

 constructor(x ,y ,sprite ,configs){
    this.sprite= Nakama.game.add.sprite(x, y, 'assets', sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds= true;  // giới hạn không cho chạy ra viền

   }

 update1(){

     this.sprite.body.velocity.x = -EnemiesController.SHIP_SPEED; //left

   }
 update2(){

     this.sprite.body.velocity.x = EnemiesController.SHIP_SPEED; //right
 }

update(){

     this.sprite.body.velocity.x =- EnemiesController.SHIP_SPEED;
     if(this.sprite.body.velocity.x==100) this.sprite.body.velocity.x = EnemiesController.SHIP_SPEED;


   }

}

 EnemiesController.SHIP_SPEED= 400;
