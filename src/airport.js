class Airport{
    landedPlanes = [];
    airportCapacity;
    stormy;
    landPlane = plane => {
        if (this.planeWithoutId(plane) || this.airportAtCapacity() || this.planeAlreadyLanded(plane)|| this.stormy){
            return;
        }
        this.landedPlanes.push(plane);
        }

    planeWithoutId = plane => {
        return !plane.id;
    }

    airportAtCapacity = () =>{
        if (this.landedPlanes.length == this.airportCapacity){
            console.log("Cannot land plane, airport at capacity.");
            return true;
        }
        return false;
    }

    planeAlreadyLanded = plane => {
        let ids = this.landedPlanes.map(plane => plane.getId());
        if (ids.includes(plane.getId())){
            return true;
        }
        return false;
    }

    takeOff = plane => {
        if (this.stormy || !this.landedPlanes.includes(plane)){
            return;
        }
        let index = this.landedPlanes.indexOf(plane);
        this.landedPlanes.splice(index, 1);
        }

    updateCapacity = capacity => {
        this.airportCapacity = capacity;
    }
}
export default Airport;