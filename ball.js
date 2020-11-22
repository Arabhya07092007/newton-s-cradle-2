class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'restitution':1,
            'friction':0,
            'frictionAir':0.00,
            'slop': 1,
            'intertia':Infinity
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("white");
        fill("black")
        ellipse(0, 0, this.width, this.height);
        tint(0, 153, 204, 126);
        pop();
      }
}
