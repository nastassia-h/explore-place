import React, { createContext, useState, useContext, useEffect } from 'react';
import { getFavoritePlaces, patchFavoritePlaces } from '../storage/FavPlacesStorage'; 

const FavoritePlacesContext = createContext();

export const FavoritePlacesProvider = ({ children }) => {
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const places = await getFavoritePlaces();
      setFavoritePlaces(places || []);
    } catch (error) {
      console.error('Error fetching favorite places:', error);
    }
  };

  const patchFavPlaces = async (placeId) => {
    try {
      await patchFavoritePlaces(placeId);
      fetchData();
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  // Value to be provided by the Context
  const value = {
    favoritePlaces,
    patchFavPlaces,
  };

  return (
    <FavoritePlacesContext.Provider value={value}>
      {children}
    </FavoritePlacesContext.Provider>
  );
};

export const useFavoritePlaces = () => useContext(FavoritePlacesContext);

