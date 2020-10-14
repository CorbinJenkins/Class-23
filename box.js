class Box{
    constructor(x,y,w,h){
        var options = {
            restitution: 0.3,
            friction: 0.8,
            density: 1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }



}