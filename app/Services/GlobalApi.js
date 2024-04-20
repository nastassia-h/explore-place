import axios from "axios"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY="AIzaSyC2S3_hE3KCeeyU_O4YnEPYZ5e9pjXDmBE"


const nearByPlace = (lat,lng,type) =>
    axios.get(BASE_URL + "/nearbysearch/json?" + "&location=" + lat + "," + lng + "&radius=1500&type=" + type + "&key=" + API_KEY);

const searchByText = (searchText) => 
    axios.get(BASE_URL + "/textsearch/json?query=" + searchText + "&key=" + API_KEY);

const getPlaceById = (placeId) => 
    axios.get(BASE_URL + `/details/json?place_id=${placeId}&key=${API_KEY}`);

const getPlaceImageUri = (image) => 
    BASE_URL + "/photo?maxwidth=400&photo_reference=" + image + "&key=AIzaSyC2S3_hE3KCeeyU_O4YnEPYZ5e9pjXDmBE";

export default{
    nearByPlace,
    searchByText,
    getPlaceById,
    getPlaceImageUri
}