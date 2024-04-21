import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext';
import PlaceMarker from './PlaceMarker';

export default function GoogleMapView({placeList}) {
   const [mapRegion, setMapRegion] = useState({})

   const {location, setLocation} = useContext(UserLocationContext);

   useEffect(()=>{
      if (placeList.length > 0) {
         let place = placeList[0];
         setMapRegion({
            latitude: place.geometry?.location.lat,
            longitude: place.geometry?.location.lng,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0421,
         });
         return;
      }
      if (!location) return;
      setMapRegion({
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
         latitudeDelta: 0.0522,
         longitudeDelta: 0.0421,
      })
   },[location, placeList])

  return (
   <View style={styles.mainContainer}>
      <Text style={styles.title}>Top Near By Places</Text>
      <View style={styles.container}>
         {location 
         ? (
            <MapView style={styles.map} 
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
            >
               {placeList.map((item,index)=>index<=4&&(
                <PlaceMarker item={item} key={index} />
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
      marginBottom: 10
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
      height: Dimensions.get('screen').height*0.3,
      borderRadius: 16,
   },
 });