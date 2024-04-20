import React from 'react'
import { Marker } from 'react-native-maps'

export default function PlaceMarker({item, isSelected}) {
  return (
      <Marker
         image={isSelected ? require('../../../assets/heart.png') : require('../../../assets/heart-line.png')}
         title={item.name} 
         coordinate={
            {
               latitude: item.geometry?.location.lat,
               longitude: item.geometry?.location.lng,
               latitudeDelta: 0.0522,
               longitudeDelta: 0.0421,
            }
         }
      />
  )
}