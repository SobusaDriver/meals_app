import OpeningHours from "./OpeningHours";

type Coordinates = {
    lat: number;
    lng: number;
}

type LocationDetails = {
    location: Coordinates;
    viewport: {
        northeast: Coordinates;
        southwest: Coordinates;
    }

}

export default LocationDetails;