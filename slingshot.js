class Sling{
    constructor(bodyA , pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }

        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world,this.shot);

    }

    attach(body){
        this.shot.bodyA = body;
    }

    release(){
        this.shot.bodyA = null;
    }
    display(){
        if(this.shot.bodyA){
        var pointA = this.shot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        stroke("black");
        line(pointA.x , pointA.y , pointB.x , pointB.y);
        }
    }
}