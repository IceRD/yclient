import React from 'react'
import { View } from 'react-native'
import {
  TopNavigation as Navigation,
  TopNavigationAction as Action,
  StyleService,
  useStyleSheet,
  Text
} from '@ui-kitten/components'
import { BackIcon } from '~/utils/icons'

export default function TopNavigation({ title, subtitle, onPressBack }) {
  const styles = useStyleSheet(themedStyles)

  return (
    <Navigation
      alignment="center"
      title={
        title && (
          <View>
            <Text style={styles.title} category="s1">
              {title}
            </Text>
          </View>
        )
      }
      subtitle={
        subtitle && (
          <View>
            <Text style={styles.subtitle} category="s2">
              {subtitle}
            </Text>
          </View>
        )
      }
      accessoryLeft={
        onPressBack && (
          <View>
            <Action onPress={onPressBack} icon={<BackIcon />} />
          </View>
        )
      }
      style={styles.navigation}
    />
  )
}

const themedStyles = StyleService.create({
  navigation: {
    backgroundColor: 'transparent'
  },
  title: {
    color: 'color-primary-100'
  },
  subtitle: {
    color: 'color-primary-900'
  }
})
