import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { useEffect, useState } from 'react'
import FavMarker from './FavMarker';

export default function GoogleMapView({places, index}) {
   const [mapRegion, setMapRegion] = useState({})
   const place = places[index];
   const selected = index;

   useEffect(()=>{
      if (!place) return;
      setMapRegion({
         latitude: place.geometry?.location.lat,
         longitude: place.geometry?.location.lng,
         latitudeDelta: 0.00222,
         longitudeDelta: 0.00221,
      })
   },[index])

  return (
   <View style={styles.mainContainer}>
      <View style={styles.container}>
         {places
         ? (
            <MapView style={styles.map} 
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
            >
               {places.map((item,index)=>(
                <FavMarker item={item} key={index} isSelected={selected === index}/>
               ))}
            </MapView>
         ) : null}
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
   mainContainer: {
      gap: 10,
      marginBottom: 5
   },
   container: {
      alignItems: 'center',
   },
   title: {
      fontSize: 20,
      fontWeight: "600",
      fontFamily: 'Raleway'
   },
   map: {
      width: "100%",
      height: Dimensions.get('screen').height*0.7,
   },
 });