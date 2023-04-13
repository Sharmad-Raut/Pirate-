class CannonBall{
constructor(x,y){
var options={isStatic:true}

this.r=30;
this.body=Bodies.circle(x,y,this.r,options);
World.add(world,this.body);
this.image=loadImage("./assets/cannonball.png")


}


display(){
push();
imageMode(CENTER);
var pos=this.body.position;
image(this.image,pos.x,pos.y,this.r,this.r)
pop ();
}
shoot(){
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:30,y:-20})
}
}