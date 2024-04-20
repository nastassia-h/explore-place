import { saveData, loadData } from './AsyncStorageUtils';

const FAVORITE_PLACES_KEY = 'favoritePlaces';

export const saveFavoritePlaces = async (places) => {
    await saveData(FAVORITE_PLACES_KEY, places);
};

export const getFavoritePlaces = async () => {
    return await loadData(FAVORITE_PLACES_KEY) ?? [];
};

export const patchFavoritePlaces = async (placeId) => {
    try {
        const favoritePlaces = await getFavoritePlaces();        
        const index = favoritePlaces.findIndex(place => place.id === placeId);
        
        if (index !== -1) {
            const updatedFavorites = [...favoritePlaces];
            updatedFavorites.splice(index, 1);
            await saveFavoritePlaces(updatedFavorites);
        } else {
            const placeToAdd = { id: placeId }; 
            const updatedFavorites = [...favoritePlaces, placeToAdd];
            await saveFavoritePlaces(updatedFavorites);
        }
    } catch (error) {
        console.error('Error patching favorite places: ', error);
    }
};

export const isPlaceInFavorites = async (placeId) => {
    const favoritePlaces = await getFavoritePlaces();
    console.log(favoritePlaces);
    return favoritePlaces.some(favoritePlace => favoritePlace.id === placeId);
};