import React from 'react'
import { StatusBar } from 'react-native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import { default as theme } from './../theme/ui.json'
import { default as mapping } from './../theme/mapping.json'
import MainNavigation from '~/navigations/MainNavigation'
import { Provider } from 'react-redux'
import store, { persistor } from '~/store'
import { PersistGate } from 'redux-persist/integration/react'

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider
          {...eva}
          theme={{ ...eva.dark, ...theme }}
          customMapping={mapping}>
          <MainNavigation />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  </>
)
