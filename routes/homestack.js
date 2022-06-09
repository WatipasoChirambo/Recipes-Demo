import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from '@react-navigation/stack'
import RecipeDetail from '../app/screens/RecipeDetail'
import HomeScreen from '../app/screens/HomeScreen'


const screen = {
    Home: {
        screen: HomeScreen,
    },
    RecipeDetail: {
        screen: RecipeDetail,
    }
}

const Stack = createNativeStackNavigator(screen)

export default createAppContainer(Stack)