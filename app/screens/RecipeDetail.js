import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'


function RecipeDetail({route, navigation}) {

  const { title, image, readyInMinutes, servings, steps } = route.params;

  return (
    <View>
      <View style={styles.Container}>
      <Image
          style={styles.ImageStyle}
          source={{uri:`${image}`}}/>
          <View style={styles.Description}>
            <Text style={styles.text}>{title}</Text>
            <Text>
              Ready in {readyInMinutes} minutes
            </Text>
            <Text>
              Servings: {servings}
            </Text>
          </View>
    </View>
      <View style={styles.ingredients}>
          <Text style={styles.ingredientsText}>
            STEPS
          </Text>
          <Text>
            {steps.map((step, index) => (
              <Text key={index}>
                {step.step.includes('.') ? step.step : step.step + '.'}
              </Text>
            ))}
          </Text>
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ImageStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  Container:{
    flexDirection: 'row',
    margin: 12,
  },
  Description:{
    margin: 15,
    paddingRight: 25,
    width: 200,
  },
  text:{
    fontSize:20,
    fontWeight:'800',
    color:'#00BA9F',
  },
  ingredients:{
    margin: 15,
  },
  ingredientsText:{
    fontSize:20,
  }
})

export default RecipeDetail