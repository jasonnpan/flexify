import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function exerciseInstructions() {
  const item = useLocalSearchParams();

  return (
    <View>
      <Text>exerciseInstructions</Text>
    </View>
  )
}