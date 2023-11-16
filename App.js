import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import FoodDetails from './screens/FoodDetails';
import Splash from './screens/Splash';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetails}
          options={{ headerShown: false }}
        />
      
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
          {/* <Stack.Screen
          name="Qrcode"
          component={Qrcode}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React from 'react'
// import { Text, View } from 'react-native'

// const Login =()=>{
//     return(
//         <View>
//             <Text>HI</Text>
//         </View>
//     )
// }
// export default Login;
