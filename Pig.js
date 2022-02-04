class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility= 255;
  }
 display()
 {
   if(this.body.speed<3)
   {
     super.display()
    }
    else
    {
    World.remove(world,this.body);
    push();
    tint(255,this.visibility)
    this.visibility= this.visibility-10;
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
    }
 }

 score(){ 
   if (this.visiblity < 0 && this.visiblity > -1005)
   { 
     score++; 
     console.log("scorefunctioncalled")
    } 
  }



}