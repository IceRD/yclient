import React from 'react'
import { View } from 'react-native'
import { Spinner, StyleService, useStyleSheet } from '@ui-kitten/components'

export default function LoadingIndicator(props) {
  const styles = useStyleSheet(themedStyles)

  return (
    <View style={styles.indicator} {...props}>
      <Spinner size="small" />
    </View>
  )
}

const themedStyles = StyleService.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
