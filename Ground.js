//Blue print of Ground
class Ground {
  // special member function of class to initialize the property and stores all the properties that our object is going to have
    constructor(x,y,width,height) {
      //properties
      // JSON format of storing data
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };