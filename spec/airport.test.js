import Airport from "../src/airport.js"
import Plane from "../src/plane.js"
import { assertEquals, it } from "./test-framework/test-framework.js";

export function airportTesting(){

    it(`Test 1 - landPlane adds the Plane to the Airport's landedPLanes array`, () => {;

    // Arrange
    let airport = new Airport();
    let plane = new Plane("Plane1");
    let expectedOutput = plane;

    // Act
    airport.landPlane(plane);
    let actualOutput = airport.landedPlanes[0];

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 2 - A Plane without an id is unable to be added to the array`, () => {;

    // Arrange
     let airport = new Airport();
     let plane = new Plane();
     let expectedOutput = 0;

    // Act
    airport.landPlane(plane);
    let actualOutput = airport.landedPlanes.length;

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 3 - landPlane adds the Plane to the Airport's landedPLanes array when landedPlanes is not empty`, () => {
    // Arrange
     let airport = new Airport();
     let plane = new Plane("Plane1")
     let plane2 = new Plane("Plane2");
     airport.landedPlanes = [plane]
     let expectedOutput = true;

    // Act
    airport.landPlane(plane2);
    let actualOutput = airport.landedPlanes.includes(plane);

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 4 - airportAtCapacity returns true when length of landedPlanes equals airportCapacity`, () => {

    // Arrange
     let airport = new Airport();
     let plane = new Plane("Plane1");
     airport.airportCapacity = 1;
     airport.landedPlanes = [plane]
     let expectedOutput = true;

    // Act
    let actualOutput = airport.airportAtCapacity();

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 5 - airportAtCapacity returns false whe length of landedPlanes is less than airportCapacity`, () => {

    // Arrange
     let airport = new Airport();
     let plane = new Plane ("Plane1")
     airport.airportCapacity = 2;
     airport.landedPlanes = [plane]
     let expectedOutput = false

    // Act
    let actualOutput = airport.airportAtCapacity();

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it( `Test 6 - Plane cannot be added to landedPlanes when isAirportFull() returns true`, () => {

    // Arrange
     let airport = new Airport();
     let plane = new Plane("Plane1")
     let plane2 = new Plane("Plane2")
     airport.airportCapacity = 1;
     airport.landedPlanes = [plane]
     airport.landPlane(plane2)
     let expectedOutput = false;

    // Act
    let actualOutput = airport.landedPlanes.includes(plane2);

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 7 - getId returns the id of a Plane`, () => {

    // Arrange
    let plane = new Plane("Plane1")
    let expectedOutput = "Plane1";

    // Act
    let actualOutput = plane.getId();

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 8 - Plane cannot be added to landedPlanes if Plane with same Id has already landed`, () => {

    // Arrange
    let airport = new Airport();
    let plane = new Plane("TwinPlane")
    let plane2 = new Plane("TwinPlane")
    airport.landedPlanes = [plane]
    airport.landPlane(plane2)
    let expectedOutput = 1;

    // Act
    let actualOutput = airport.landedPlanes.length;

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 9 - takeOff removes the Plane from the Airport's landedPLanes array`, () => {

    // Arrange
    let airport = new Airport();
    let plane = new Plane("Plane1");
    airport.landPlane(plane);
    let expectedOutput = 0;

    // Act
    airport.takeOff(plane);
    let actualOutput = airport.landedPlanes.length;

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 10 - takeOff should not affect landedPlanes if the Plane isn't landed`, () => {
    // Arrange
    let airport = new Airport();
    let plane = new Plane("Plane1");
    let expectedOutput = 0;

    // Act
    airport.takeOff(plane);
    let actualOutput = airport.landedPlanes.length;

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 11 - updateCapacity should change the airportCapacity of the Airport`, () => {
    // Arrange
    let airport = new Airport();
    let expectedOutput = 10;

    // Act
    airport.updateCapacity(10);
    let actualOutput = airport.airportCapacity;

    // Assert
    assertEquals(actualOutput, expectedOutput);
    
    });

    it(`Test 12 - landPlane doesn't add Plane to landedPlanes when stormy is true`, () => {
    // Arrange
    let airport = new Airport();
    let plane = new Plane("Plane1");
    airport.stormy = true;
    let expectedOutput = 0;

    // Act
    airport.landPlane(plane);
    let actualOutput = airport.landedPlanes.length;
    console.log(airport.landedPlanes)
    // Assert
    assertEquals(actualOutput, expectedOutput);
    });

    it(`Test 13 - takeOff doesn't remove Plane from landedPlanes when stormy is true`, () => {
    // Arrange
    let airport = new Airport();
    let plane = new Plane("Plane1");
    airport.landPlane(plane);
    airport.stormy = true;
    let expectedOutput = 1;

    // Act
    airport.takeOff(plane);
    let actualOutput = airport.landedPlanes.length;

    // Assert
    assertEquals(actualOutput, expectedOutput);
    });
}