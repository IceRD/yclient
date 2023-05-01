import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteComponents, defaultRoute } from '~/router/routes'
import { stackNavigatorOptions } from '~/navigations/config'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '~/store/user/userSelectors'

const { Navigator, Screen } = createNativeStackNavigator()

const profileStackName = 'ProfileStack'

const ProfileStack = function () {
  const isAuth = useSelector(selectIsAuth)
  const initialRouteName = isAuth
    ? RouteComponents.profile.name
    : RouteComponents.auth.name

  return (
    <Navigator
      screenOptions={stackNavigatorOptions}
      initialRouteName={initialRouteName}>
      {isAuth ? (
        <Screen
          name={RouteComponents.profile.name}
          component={RouteComponents.profile.component}
        />
      ) : (
        <Screen
          name={RouteComponents.auth.name}
          component={RouteComponents.auth.component}
        />
      )}
    </Navigator>
  )
}

export { ProfileStack, profileStackName }
