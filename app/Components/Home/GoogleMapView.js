import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function GoogleMapView() {
   const [mapRegion, setMapRegion] = useState({})

   const {location, setLocation} = useContext(UserLocationContext);

   useEffect(()=>{
      if (!location) return;
      setMapRegion({
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
         latitudeDelta: 0.0522,
         longitudeDelta: 0.0421,
      })
   },[location])

  return (
   <View style={styles.mainContainer}>
      <Text style={styles.title}>Top Near By Places</Text>
      <View style={styles.container}>
         <MapView style={styles.map} 
         provider={PROVIDER_GOOGLE}
         showsUserLocation={true}
         region={mapRegion}
         >
            {/* <Marker
            title='You'
            coordinate={mapRegion}
            /> */}
         </MapView>
    </View>
   </View>
    
  )
}

const styles = StyleSheet.create({
   mainContainer: {
      gap: 10
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