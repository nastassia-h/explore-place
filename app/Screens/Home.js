import { View, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import {GoogleMapView, PlaceList, CategoryList, Header} from '../Components/Home'
import { UserLocationContext } from '../Context/UserLocationContext'
import GlobalApi from '../Services/GlobalApi'

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const {location, setLocation} = useContext(UserLocationContext);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(()=>{
    if (searchLocation.length > 0) {
      getNearBySearchPlaceText(searchLocation);
      return;
    }
    if (location) getNearBySearchPlace('restaurant'); 
  },[location, searchLocation])
  
  const getNearBySearchPlace = (value) => {
    GlobalApi.nearByPlace(location.coords.latitude,
      location.coords.longitude,value).then(resp=>{
        setPlaceList(resp.data.results)
    })
  } 

  const getNearBySearchPlaceText = (value) => {
    GlobalApi.searchByText(value).then(resp=>{
      setPlaceList(resp.data.results);
    })
  } 

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={false}/>
      <Header setSearchLocation={setSearchLocation}/>
      <GoogleMapView placeList={placeList} />
      <CategoryList setSelectedCategory={(value)=>getNearBySearchPlace(value)}/>
      {placeList 
        ? <PlaceList placeList={placeList} />
        : null
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10
  },
})