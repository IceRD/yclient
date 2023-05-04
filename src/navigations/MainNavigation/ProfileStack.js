import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteScreens, defaultRoute } from '~/router/routes'
import { stackNavigatorOptions } from '~/navigations/config'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/store/user/userSelectors'

const { Navigator, Screen } = createNativeStackNavigator()

const profileStackName = 'ProfileStack'

// https://reactnavigation.org/docs/native-stack-navigator/#animation
const screenOptions = {
  headerShown: false,
  animation: 'fade_from_bottom'
}

const ProfileStack = function () {
  const isAuth = useSelector(selectIsAuth)
  const initialRouteName = isAuth
    ? RouteScreens.profile.name
    : RouteScreens.auth.name

  return (
    <Navigator
      screenOptions={stackNavigatorOptions}
      initialRouteName={initialRouteName}>
      {isAuth ? (
        <>
          <Screen
            name={RouteScreens.profile.name}
            component={RouteScreens.profile.component}
            options={screenOptions}
          />
          <Screen
            name={RouteScreens.personalData.name}
            component={RouteScreens.personalData.component}
            options={screenOptions}
          />
          <Screen
            name={RouteScreens.changePassword.name}
            component={RouteScreens.changePassword.component}
            options={screenOptions}
          />
          <Screen
            name={RouteScreens.loyaltyCards.name}
            component={RouteScreens.loyaltyCards.component}
            options={screenOptions}
          />
          <Screen
            name={RouteScreens.subscriptionCards.name}
            component={RouteScreens.subscriptionCards.component}
            options={screenOptions}
          />
          <Screen
            name={RouteScreens.certificateCards.name}
            component={RouteScreens.certificateCards.component}
            options={screenOptions}
          />
        </>
      ) : (
        <Screen
          name={RouteScreens.auth.name}
          component={RouteScreens.auth.component}
          options={screenOptions}
        />
      )}
    </Navigator>
  )
}

export { ProfileStack, profileStackName }
