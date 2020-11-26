class Arrow{
    constructor(x,y){
        var options ={
            restitution:0.8,
            density:1.0,
            friction:0.2,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 80;
        this.height = 80;
        this.image = loadImage("sprite_0.png");
        this.fire = loadImage("sprite_1.png");
        World.add(world,this.body);

    }
    changeImg(){
        var pos = this.body.position;
       
        if(keyDown("UP_ARROW")){
            imageMode(CENTER);
            image(this.fire,0,0,this.width,this.height);
          }
      
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
    
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
       
    }
    
}