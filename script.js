/* 
JavaScript code that implements below.
• Create a class called Airplane whose constructor takes following parameters -     name, occupancy, speed
*/
class airplane {
    constructor (name, occupancy, speed) {
        this.name = name;
        this.occupancy = occupancy;
        this.speed = speed;
        }

    // Getter to read property
    get Name() {
        return this.name;
    }
    get Occupancy() {
        return this.occupancy;
    }
    get Speed() {
        return this.speed;
    }

    // Setter to set or write the value for property & Validate the class properties
    set Name(name) {
        if (name == ''){
        throw new Error("Enter correct value Please!! name cannot be empty");
        }
        this.name = name;
    }

    set Occupancy(occupancy) {
        if (occupancy == '') {
            throw new Error("Enter correct value Please! Ocupancy cannot be empty");
        } else if (occupancy < 0){
            throw new Error("Enter correct value Please! Ocupancy should not be negative");
        } else if (occupancy >= 180){
            throw new Error("Enter correct value Please! Ocupancy should not be more than 180");
        }
        this.occupancy = occupancy;
    }

    set Speed(speed) {
        if (speed == undefined || speed == '' || speed <= 0 || speed >= 900){
        throw new Error("Enter correct value Please! Speed cannot be empty, should not be negative and should not be more than 900");
        }
        this.speed = speed;
    }        
  
    // method “status”  - Airplane : Boeing 777 with 180 occupancy, is moving at 900 km/hr”
    get statusOfAirplane() {
        return this.status();
    }

    set statusOfAirplane(object) {
        return this.status.name(),this.status.occupancy(),this.status.speed();
    }
    
    status() {
        return "Airplane : Boeing " + this.name + " with " + this.occupancy + " occupancy, is moving at " + this.speed + " km/hr";
    }

    // Add methods increaseSpeed to accepts single parameter which a value of speed to increase by existing speed
    get incSp() {
        return this.increaseSpeed();
    }
    set incSp(increase){
        return this.increaseSpeed();
    }
    increaseSpeed(){
        return this.speed + this.increase;
    }

    // Add methods decreaseSpeed to accepts single parameter which a value of speed to decrease by existing speed
    get decSp() {
        return this.decreaseSpeed();
    }
    set decSp(decrease) {
        return this.decreaseSpeed();
    }
    decreaseSpeed(){
        return this.speed - this.decrease;
    }
    
}
  
// boject RecArea created with respective values
var jetAirWays = new airplane('IC3 111 DB40', 170, 900);
console.log(jetAirWays.statusOfAirplane);


// create 3 Airplane objects and call their Status methods
var indigo = new airplane('6E 403 A320 ', 160, 900);
console.log(indigo.statusOfAirplane);
indigo.increase = 200 ; //speed increased with 200
console.log("Speed increased to " + indigo.incSp);


var jetAirWays = new airplane('IC3 111 DB40', 180, 800);
console.log(jetAirWays.statusOfAirplane);
jetAirWays.increase = 200 ; //speed increased with 200
jetAirWays.decrease = 15 ; // not in the assignment question just implemented to check the functionality.
console.log("Speed decreased to " + jetAirWays.decSp);

var airIndia = new airplane('9K 230 B320', 150, 600);
console.log(airIndia.statusOfAirplane);
airIndia.increase = 200 ; //speed increased with 200

// we can create an object array and invoke Increase() method in each object iteration to get +200 seed value as well