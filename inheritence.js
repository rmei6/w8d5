Function.prototype.inherits2 = function(Superclass) {
    function Surrogate(){}
    Surrogate.prototype = Superclass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

Function.prototype.inherits = function(Superclass){
    this.prototype = Object.create(Superclass.prototype);
    this.prototype.constructor = this;
};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

MovingObject.prototype.left = function(){
    console.log("left");
};

Asteroid.prototype.right = function(){
    console.log("right");
};

let ship = new Ship();
let asteriod = new Asteroid();
let move = new MovingObject();

asteriod.left();
ship.left();

asteriod.right();
// ship.right();
// move.right();

console.log(asteriod);
console.log(ship);
console.log(move);

