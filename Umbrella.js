class Umbrella{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.circle(x,y,50,options);
    this.image=loadImage("images/Walking Frame/walking_1.png");
    this.r=50;
    this.x=x;
    this.y=y;
    this.r=5;
    World.add(world,this.body);
    }
    display(){
    fill("Blue");
    imageMode(CENTER);
    image(this.image,this.x,this.y+70,300,300);
    
    }
}