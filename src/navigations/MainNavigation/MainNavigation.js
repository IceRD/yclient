import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RouteComponents, defaultRoute } from '~/router/routes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  StyleService,
  useStyleSheet
} from '@ui-kitten/components'
import {
  navigationContainerTheme,
  stackNavigatorOptions
} from '~/navigations/config'
import { ProfileStack, profileStackName } from './ProfileStack'
import { ListIcon, PersonIcon, InfoIcon } from '~/utils/icons'

// import { useSelector } from 'react-redux'
// import { selectIsAuth } from '~/store/user/userSelectors'
// const isAuth = useSelector(selectIsAuth)

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles)

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      style={styles.bottomNavigation}>
      <BottomNavigationTab title={RouteComponents.home.title} icon={ListIcon} />

      <BottomNavigationTab
        title={RouteComponents.profile.title}
        icon={PersonIcon}
      />

      <BottomNavigationTab
        title={RouteComponents.about.title}
        icon={InfoIcon}
      />
    </BottomNavigation>
  )
}

const MainNavigation = () => (
  <NavigationContainer theme={navigationContainerTheme}>
    <Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={stackNavigatorOptions}
      initialRouteName={profileStackName}>
      <Screen
        name={RouteComponents.home.name}
        component={RouteComponents.home.component}
      />
      <Screen name={profileStackName} component={ProfileStack} />
      <Screen
        name={RouteComponents.about.name}
        component={RouteComponents.about.component}
      />
    </Navigator>
  </NavigationContainer>
)

const themedStyles = StyleService.create({
  bottomNavigation: {
    marginTop: -1,
    backgroundColor: 'color-basic-1000'
  }
})

export default MainNavigation
