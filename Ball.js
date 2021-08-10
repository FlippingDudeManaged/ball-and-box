class Ball {
    constructor(x, y, w, h) {
      let options = {
        restitution: 0.8
      };
  
      this.body = Bodies.circle(x, y, w, options);
      this.w = w;
      this.h = h;
  
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, 2*this.w, 2*this.h);
      pop();
    }
  }