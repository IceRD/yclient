import { HomeScreen, ProfileScreen, AuthScreen, AboutScreen } from '~/screens'

const Routes = {
  home: 'Home',
  auth: 'Auth',
  profile: 'Profile',
  about: 'About'
}

const defaultRoute = Routes.profile

const RouteComponents = {
  home: {
    title: 'Запись',
    name: Routes.home,
    component: HomeScreen
  },
  auth: {
    title: 'Авторизация',
    name: Routes.auth,
    component: AuthScreen
  },
  profile: {
    title: 'Профиль',
    name: Routes.profile,
    component: ProfileScreen
  },
  about: {
    title: 'О нас',
    name: Routes.about,
    component: AboutScreen
  }
}

export { Routes, defaultRoute, RouteComponents }
