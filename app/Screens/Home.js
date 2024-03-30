import { View, StyleSheet } from 'react-native'
import Header from '../Components/Home/Header'
import React from 'react'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <GoogleMapView/>
      <CategoryList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10
  },
})