import React, { useState } from 'react'
import { View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import {
  StyleService,
  useStyleSheet,
  Text,
  Icon,
  Layout,
  Input,
  Button
} from '@ui-kitten/components'
import { TopNavigation } from '~/components'
import { globalStyles } from '~/theme'
import { Routes } from '~/router/routes'

export default function LoyaltyCardsScreen({ navigation }) {
  const styles = useStyleSheet({ ...globalStyles, ...themedStyles })
  // const user = useSelector(selectUser)

  return (
    <SafeAreaView style={styles._safe}>
      <TopNavigation
        title={Routes.profile.title}
        subtitle={Routes.loyaltyCards.title}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles._wrapper}>
        <Layout level="2" style={styles.container}></Layout>
      </View>
    </SafeAreaView>
  )
}

const themedStyles = StyleService.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 16
  }
})
