import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function ViewImageScreen() {
  return (
      <View style={styles.container}>
<Image resizeMode='contain' style={styles.image} source={{uri:'https://picsum.photos/seed/picsum/200/300'}}/>
      </View>
    
  )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
    },
    container:{
        backgroundColor: 'black',
        flex: 1,
    }
})

export default ViewImageScreen