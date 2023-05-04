import React, { useState, useEffect } from 'react'
import { View, Image, SafeAreaView } from 'react-native'
import {
  Layout,
  useStyleSheet,
  StyleService,
  Tab,
  TabView
} from '@ui-kitten/components'
import { globalStyles } from '~/theme'
import { AuthEmail, AuthPhone } from '~/components'

export default function AuthScreen() {
  const styles = useStyleSheet({ ...globalStyles, ...themedStyles })

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, paddingTop: 16 }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('assets/images/logo.png')}
          />
        </View>

        <TabView
          tabBarStyle={styles.tabBarStyle}
          indicatorStyle={{ display: 'none' }}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <Tab
            title="Вход с паролем"
            style={selectedIndex == 0 && styles.tabSelected}>
            <View style={styles.tabContent}>
              <AuthEmail />
            </View>
          </Tab>
          <Tab
            title="Вход по коду"
            style={selectedIndex == 1 && styles.tabSelected}>
            <View style={styles.tabContent}>
              <AuthPhone />
            </View>
          </Tab>
        </TabView>
      </Layout>
    </SafeAreaView>
  )
}

const themedStyles = StyleService.create({
  logoContainer: {
    marginBottom: 24,
    paddingHorizontal: 16
  },
  logo: {
    width: '100%',
    resizeMode: 'contain'
  },
  tabBarStyle: {
    backgroundColor: 'color-basic-900',
    paddingVertical: 0,
    height: 36,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24
  },
  tabContent: {
    paddingHorizontal: 16
  },
  tabSelected: {
    backgroundColor: 'color-basic-1000',
    padding: 0,
    margin: 0,
    borderRadius: 16
  }
})
