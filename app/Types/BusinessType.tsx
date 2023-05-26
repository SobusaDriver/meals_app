import LocationDetails from "./LocationDetails";
import OpeningHours from "./OpeningHours";
import { PhotoType } from "./PhotoType";

type BUSINESS_STATUS = 'CLOSED_TEMPORARILY' | 'OPERATIONAL';

type BusinessType = {
    business_status?: string;
    geometry: LocationDetails;
    icon: string;
    name: string;
    opening_hours?: OpeningHours;
    photos: Array<PhotoType>;
    place_id: string;
    plus_code?: PlusCode;
    rating?: number;
    reference: string;
    scope?: string;
    types?: Array<string>;
    user_ratings_total?: number;
    vicinity: string;
}

export default BusinessType;