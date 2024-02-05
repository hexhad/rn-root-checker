import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import JailMonkey from 'jail-monkey'

const App = () => {

  if (JailMonkey.isJailBroken()) {
    return (
      <View {...{ style: styles.centerMe }}>
        <Text>⚠️ Ohh Root user</Text>
      </View>
    )
  }

  return (
    <View {...{ style: styles.centerMe }}>
      <Text>You are Not Rooted</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  centerMe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


