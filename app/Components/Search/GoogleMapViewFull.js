import { View, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import PlaceMarker from '../Home/PlaceMarker';
import { StyleSheet } from 'react-native';

export default function GoogleMapViewFull({placeList}) {
   const [mapRegion, setmapRegion] = useState({});
   const { location, setLocation } = useContext(UserLocationContext);

   useEffect(()=>{
   //let place = placeList[0];
   if (location) setmapRegion({
      // latitude: place.geometry?.location.lat,
      // longitude: place.geometry?.location.lng,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0422,
      longitudeDelta: 0.0421,
   });
   },[location])

   return (
      <View>
         {location
            ? <MapView
                  style={styles.mapContainer}
                  provider={PROVIDER_GOOGLE}
                  showsUserLocation={true}
                  region={mapRegion}
               >
                  {placeList.map((item,index) => (index <= 4) && (
                     <PlaceMarker item={item} key={index} />
                  ))}
               </MapView>
            : null
         } 
      </View>
   )
}

const styles = StyleSheet.create({
   mapContainer: {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height * 0.89,
   }
})