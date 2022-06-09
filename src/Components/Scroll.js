import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'

const E1ScrollView = ({ children, animation, bottomBorder, style }) => {
    const { container, E1bottomBorder } = styles

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled
            showsVerticalScrollIndicator ={false}
            >

            <Animatable.View
                animation={animation}
                iterationCount={1}>

                {children}
            </Animatable.View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    E1bottomBorder: {
        borderBottomWidth: 5,
    }
})

export { E1ScrollView }