import "dotenv/config";
import { FilterCriteria } from "./types/FilterCriteria";
import { Payload } from "./types/Payload";

const filloutAPICall = (payload: Payload, filterCriteria: FilterCriteria[]) => {
    console.log('HEY LISTEN!');
}

module.exports.callApi = filloutAPICall;