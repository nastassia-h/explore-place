import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from 'react'
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull'
import SearchBar from '../Components/Search/SearchBar'
import { UserLocationContext } from '../Context/UserLocationContext';
import GlobalApi from '../Services/GlobalApi'
import BusinessList from '../Components/Search/BusinessList';

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const {location, setLocation} = useContext(UserLocationContext);

  useEffect(()=>{
    getNearBySearchPlace('restaurant'); 
  },[])

  const getNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then(resp=>{
      setPlaceList(resp.data.results);
    })
  } 

  return (
    <SafeAreaView>
      <View >
        <SearchBar setSearchText={(value)=>getNearBySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList}/>
      <View style={{ ...styles.container, bottom:0}}>
        <BusinessList placeList={placeList} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 20,
  }
})