import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../Icons';
import Colors from '../Colors';
import Home from "../../screens/Home_screen";
import * as Animatable from 'react-native-animatable';
import Shop from '../../screens/Shop';
import Profile from '../../screens/Profile';
const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Home },
  { route: 'Shop', label: 'Shop', type: Icons.Feather, icon: 'shopping-bag', component: Shop },
  { route: 'Profile', label: 'Profile', type: Icons.Feather, icon: 'user', component: Profile },
  // { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: Home },
  // { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: Home },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -12 }, 1: { scale: 1.1, translateY: -16 } }
const animate2 = { 0: { scale: 1, translateY: 7 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .9 }, 0.8: { scale: .9 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View  style={focused ? styles.btn : styles.btn1} >
        <View style={focused ? styles.pacman : styles.pacmanx} />
        <View style={focused ? styles.pacman1 : styles.pacmanx} />
          
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : '#0003C1'} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  
  )
}

export default function AnimTab1() {
  return (
    <Tab.Navigator
    
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
   
    marginTop:10,
   position:'absolute',
   borderTopWidth:3,
   borderTopColor:'#E0E0E0',
   borderLeftWidth:2,
   borderLeftColor:'#E0E0E0',
   borderRightColor:'#E0E0E0',
   borderRightWidth:2,
   borderRadius:0,
   borderTopLeftRadius:30,
   borderTopRightRadius:30
    

  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    padding:5,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor:'white',
    
    justifyContent: 'center',
    alignItems: 'center',
    //     shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 2.22,
    
    // elevation: 6,
   
  },
  btn1: {
    width: 60,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    padding:5,
    borderColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 2.22,
    
    // elevation: 6,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0003C1',
    borderRadius: 100,

  },
  
  text: {
    marginTop:5,
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
    textAlign: 'center',
    color: '#0003C1',
  },
  pacman: {
    position:'absolute',
    width: 0,
    height: 0,
    borderTopWidth: 32,
    borderTopColor: "transparent",
    borderLeftColor: "#E0E0E0",
    borderLeftWidth: 32,
    borderRightColor: "transparent",
    borderRightWidth: 32,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 32,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    transform: [{ rotate: "315deg" }],
    
  },
  pacman1: {
    position:'absolute',
    width: 0,
    height: 0,
    borderTopWidth: 30,
    borderTopColor: "transparent",
    borderLeftColor: "white",
    borderLeftWidth: 30,
    borderRightColor: "transparent",
    borderRightWidth: 30,
    borderBottomColor: "white",
    borderBottomWidth: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    transform: [{ rotate: "315deg" }],
    
  },
  pacmanx: {
    position:'absolute',
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderLeftColor: "white",
    borderLeftWidth: 10,
    borderRightColor: "transparent",
    borderRightWidth: 10,
    borderBottomColor: "transparent",
    borderBottomWidth: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    transform: [{ rotate: "315deg" }],
    
  },

})