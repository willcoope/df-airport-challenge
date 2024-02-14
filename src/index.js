import Airport from "../src/airport.js"
import Plane from "../src/plane.js"

console.log(`Create an Airport and a Plane and land the Plane at the Airport`)

let airport = new Airport();
let plane = new Plane("Plane1");
airport.landPlane(plane);
console.log(airport.landedPlanes);

console.log(`Try to land a Plane without an Id at the Airport`)

let plane2 = new Plane();
airport.landPlane(plane2);
console.log(airport.landedPlanes);

console.log("Land another plane at the airport")
plane2 = new Plane("Plane2");
airport.landPlane(plane2);
console.log(airport.landedPlanes);

console.log("Set airportCapacity to 2 and check if airport is at capacity")
airport.airportCapacity = 2;
console.log(`airportAtCapacity: ${airport.airportAtCapacity()}`);

console.log("Increase airportCapacity to 3 and check if airport is still at capacity")
airport.airportCapacity = 3;
console.log(`airportAtCapacity: ${airport.airportAtCapacity()}`);

console.log("Decrease airportCapacity to 2 and try to land a Plane")
airport.airportCapacity = 2;
let plane3 = new Plane("Plane3");
airport.landPlane(plane3);
console.log(airport.landedPlanes);

console.log("Try to get the id of a Plane")
console.log(plane.getId());

console.log("Try to land a Plane with the same id as a Plane already at the airport")
let plane4 = new Plane("Plane1");
airport.airportCapacity = 3;
airport.landPlane(plane4);
console.log(airport.landedPlanes);

console.log("Try to take off a Plane")
airport.takeOff(plane2);
console.log(airport.landedPlanes);

console.log("Try to take off a Plane that is not at the airport")
airport.takeOff(plane2);
console.log(airport.landedPlanes);

console.log("Try to update airportCapacity using updateCapacity")
airport.updateCapacity(4);
console.log(airport.airportCapacity);

console.log("landPlane should not land a Plane if the weather is stormy")
airport.stormy = true;
airport.landPlane(plane2);
console.log(airport.landedPlanes);

console.log("takeOff should not remove a Plane if the weather is stormy")
airport.takeOff(plane);
console.log(airport.landedPlanes);