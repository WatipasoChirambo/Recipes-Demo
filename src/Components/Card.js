import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

function Card() {
  return (
    <View style={styles.container}>
          <Image
          resizeMode='contain'
          style={styles.image}
          source={{uri:'https://picsum.photos/seed/picsum/200/300'}}
          />
          <View style={styles.textContainer}>
          <Text style={styles.text}>Card</Text>
        <Text>
        Lorem ipsum dolor sit amet.
        </Text>
    </View>
        

      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
    },
    image:{
        height: 300,
        width: 300,
        borderRadius: 10,
        resizeMode: 'stretch',
    },
    text:{
        color: '#fff',
        fontWeight:'bold', 
        fontSize:20,
    },
    textContainer:{
        flexDirection: 'column',
        position: 'absolute',
        bottom: 30,
        paddingLeft:20,
    },
    desc:{
        color: '#fff',
    }
})

export default Card