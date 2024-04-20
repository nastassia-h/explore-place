import { View, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import {GoogleMapView, PlaceList, CategoryList, Header} from '../Components/Home'
import { UserLocationContext } from '../Context/UserLocationContext'
import GlobalApi from '../Services/GlobalApi'

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  const {location, setLocation} = useContext(UserLocationContext);

  useEffect(()=>{
    if (location) getNearBySearchPlace('restaurant'); 
  },[location])
  
  const getNearBySearchPlace = (value) => {
    GlobalApi.nearByPlace(location.coords.latitude,
      location.coords.longitude,value).then(resp=>{
        setPlaceList(resp.data.results)
    })
  } 

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={false}/>
      <Header/>
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