import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';

function Layout({children}) {
  return (
        <SafeAreaView style={styles.container}>
             {children}
        </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
    marginRight: 20,
    }
})

export default Layout