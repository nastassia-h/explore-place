import React from 'react'
import { Platform } from 'react-native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';

const CustomIOSModalPresentation = {
   ...TransitionPresets.ModalPresentationIOS,
   cardStyle: { 
      borderBottomLeftRadius: 0, 
      borderBottomRightRadius: 0
   },
 };

export default function HomeNavigation() {
   const Stack=createStackNavigator();
   return (
      <Stack.Navigator screenOptions={{
         gestureEnabled: Platform.OS === 'ios',
         cardOverlayEnabled: true,
         ...Platform.select({
            ios: {
               ...CustomIOSModalPresentation,
            },
            android: {},
         })
      }}>
         <Stack.Screen name='home'
            options={{headerShown:false}}
            component={Home} />
         <Stack.Screen name="place-detail" 
            options={{title:""}}
            component={PlaceDetail} 
            screenOptions={{
               presentation:'modal',
            }} />
      </Stack.Navigator>
  )
}