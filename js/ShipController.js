
 class ShipController {
   constructor(x, y, spriteName, configs){
     this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
     Nakama.game.physics.arcade.enable(this.sprite);
     this.sprite.body.velocity.y= -ShipController.SHIP_SPEED;
     this.sprite.body.collideWorldBounds= true;  // giới hạn không cho chạy ra viền
     this.configs= configs;
   }

   update(){
     if(Nakama.keyboard.isDown(this.configs.up)){

       this.sprite.body.velocity.y = -ShipController.SHIP_SPEED;

     }
     else if(Nakama.keyboard.isDown(this.configs.down)){

       this.sprite.body.velocity.y = ShipController.SHIP_SPEED;
     }
     else{
       this.sprite.body.velocity.y = 0;
     }

     if(Nakama.keyboard.isDown(this.configs.left)){

       this.sprite.body.velocity.x = -ShipController.SHIP_SPEED;
     }
     else if(Nakama.keyboard.isDown(this.configs.right)){

       this.sprite.body.velocity.x = ShipController.SHIP_SPEED;
     }
     else{
       this.sprite.body.velocity.x = 0;
     }
   }
 }

 ShipController.SHIP_SPEED= 400;
