
class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    this.x = x;
    this.y = y;
  
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    stroke("blue");
    strokeWeight(4);
    fill("cyan");
    rect(0, 0, this.w, this.h);
    pop();
  }
  
}








