// In App.js in a new project

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Restaurantscreen from './screens/Restaurantscreen';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

// function HomeScreen() {
//   return (
//     <View className="bg-red-500 h-screen  ">
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Restaurant" component={Restaurantscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;