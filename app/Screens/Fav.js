import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import HorizontalSlider from '../Components/Fav/HorizontalSlider';
import GoogleMapView from '../Components/Fav/GoogleMapView';
import { useFavoritePlaces } from '../Context/FavPlacesContext';

export default function Fav() {
  const {favoritePlaces} = useFavoritePlaces();
  const [places, setPlaces] = useState(null);
  const [selectedFav, setSelectedFav] = useState(0);

  const fetchData = async () => {
    const promises = favoritePlaces.map(async (place) => {
      const resp = await GlobalApi.getPlaceById(place.id);
      return resp.data.result;
    });
    const placesData = await Promise.all(promises);
    console.log(placesData)
    setPlaces(placesData);
  }

  useEffect(() => {
    fetchData();
  }, [favoritePlaces])

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={false}/>
      {places 
      ? (
      <>
        <GoogleMapView places={places} index={selectedFav} />
        <View style={styles.sliderContainer}>
          <HorizontalSlider data={places} selectedFav={selectedFav} setSelected={setSelectedFav}/>
        </View>
      </>
      ) : null
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  sliderContainer: {
    paddingHorizontal: 20
  }
})