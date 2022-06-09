import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDimensions } from '@react-native-community/hooks';
import Card from './src/Components/Card';
import SearchBar from './src/Components/SearchBar';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetail from './app/screens/RecipeDetail';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc43cc',
    paddingLeft:'5%',
    paddingRight:'5%',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});
