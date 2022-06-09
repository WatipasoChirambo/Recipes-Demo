import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Navigator, Text, View, Image, Dimensions,TouchableOpacity, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import Card from '../../src/Components/Card';
import CategoryButton from '../../src/Components/CategoryButton';
import Layout from '../../src/Components/Layout';
import { E1ScrollView } from '../../src/Components/Scroll';
import RecipeDetail from './RecipeDetail';
import { useNavigation } from '@react-navigation/native'
import { SearchBar } from 'react-native-elements';
import useFetch from '../Hooks/useFetch';


function HomeScreen({navigation}) {
    const { data, loading, error } = useFetch('https://api.spoonacular.com/recipes/random?apiKey=2694eb61f06d495f911ad7884da74850&number=10&');
    const [Search, setSearch] = useState('')
    // useEffect(() => {
    //     getPopular()
    // },[])

    // const getPopular = async ()=>{
    //     const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=2694eb61f06d495f911ad7884da74850&number=10&');
    //     const data = await response.json();
    //     setPopular(data.recipes);
    // }
    
    // const SearchRecipes = async ()=>{
    //     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2694eb61f06d495f911ad7884da74850&query=${Search}&maxFat=25&number=2`)
    //     const data = await response.json();
    //     setPopular(data.recipes);
    // }

  return (
<Layout>
        <View style={styles.InputContainer}>
        <SearchBar
        placeholder="Search"
        onChangeText={(text)=>setSearch(text)}
        value={Search}
      />
        </View>
        <View style={styles.categories}>
            <CategoryButton text="Vegetarian" onPress={()=>console.log("Vegetarian")}/>
            <CategoryButton text="Italian" onPress={()=>console.log("Italian")}/>
            <CategoryButton text="Diet" onPress={()=>console.log("Diet")}/>
            <CategoryButton text="Instrument" onPress={()=>console.log("Instrument")}/>
        </View>
        <View style={styles.recipeContainer}>
            {loading ? <Text>Loading...</Text> : 
            <ScrollView
            showsVerticalScrollIndicator={false} 
            persistentScrollbar={false}
            >
                    {data.map((recipe, index) => (
                    <TouchableOpacity key={index} style={styles.card} onPress={()=>navigation.navigate('RecipeDetail', {
            title: recipe?.title,
            image: recipe?.image,
            readyInMinutes: recipe?.readyInMinutes,
            servings: recipe?.servings,
            steps: recipe?.analyzedInstructions[0].steps,
          })}>
                            <Image
                            style={styles?.ImageStyle}
                            source={{uri:`${recipe?.image}`}}/>
                            <Text style={styles.recipeTitle}>
                            {recipe?.title}
                            </Text>
                    </TouchableOpacity>
                        
                    ))}
                    </ScrollView>}
                </View>
    </Layout>
    
  )


}


const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        height: 40,
        marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    },
    recipeTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    recipeContainer:{
        flex:1,
        height:'90%',
        flexGrow:1,
    },
    ImageStyle: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    recipes:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexGrow:1,
    },
    card:{
        paddingTop:10,
        paddingBottom:10,
    },
})

export default HomeScreen