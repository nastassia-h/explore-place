import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Fav, Search, Profile } from '../Screens';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size}/>
        ),
      }}
      />
      <Tab.Screen name="Fav" component={Fav} 
      options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Search" component={Search} 
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}