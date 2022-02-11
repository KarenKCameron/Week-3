// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name, topspeed){
        this.name = name;
        this.topspeed = topspeed;
    }
useAccelerate(){
    const {name, topspeed} = this;
    console.log(`${name} moving to ${topspeed}`);
    };
};


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const milleniumFalcon = new SpaceShip('Millenium Falcon', "9")
const enterprise = new SpaceShip('Enterprise', `10`)

SpaceShip.milleniumFalcon;
SpaceShip.enterprise;

milleniumFalcon.useAccelerate();
enterprise.useAccelerate();