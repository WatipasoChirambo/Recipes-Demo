import React from 'react'
import { Button, StyleSheet,TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'

function CategoryButton({ text, onPress }) {
  return (
         <TouchableHighlight onPress={onPress} style={styles.container}>
             <View>
             <Text style = {styles.text}>
               {text}
            </Text>
             </View>
         </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#00BA9F',
        padding: 10,
        borderRadius:20,
    },
    text:{
        color: '#fff',
    }
})

export default CategoryButton