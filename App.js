import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './src/Screens/Item';
import Home from './src/Screens/Home';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Spartan_wght": require("./assets/Fonts/Spartan_wght.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Item" component={Item} />

        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>


  );
}
