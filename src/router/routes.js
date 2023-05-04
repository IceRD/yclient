import * as Screens from '~/screens'

const Routes = {
  home: {
    title: 'Запись',
    link: 'Home'
  },
  auth: {
    title: 'Авторизация',
    link: 'Auth'
  },
  profile: {
    title: 'Профиль',
    link: 'Profile'
  },
  about: {
    title: 'О нас',
    link: 'About'
  },
  personalData: {
    title: 'Личные данные',
    link: 'PersonalData'
  },
  changePassword: {
    title: 'Смена пароля',
    link: 'ChangePassword'
  },
  loyaltyCards: {
    title: 'Карты лояльности',
    link: 'LoyaltyCards'
  },
  subscriptionCards: {
    title: 'Абонементы',
    link: 'SubscriptionCards'
  },
  certificateCards: {
    title: 'Сертификаты',
    link: 'CertificateCards'
  }
}

const defaultRoute = Routes.about

const RouteScreens = {
  home: {
    title: Routes.home.title,
    name: Routes.home.link,
    component: Screens.HomeScreen
  },
  profile: {
    title: Routes.profile.title,
    name: Routes.profile.link,
    component: Screens.ProfileScreen
  },
  about: {
    title: Routes.about.title,
    name: Routes.about.link,
    component: Screens.AboutScreen
  },
  auth: {
    name: Routes.auth.link,
    component: Screens.AuthScreen
  },
  personalData: {
    name: Routes.personalData.link,
    component: Screens.PersonalDataScreen
  },
  changePassword: {
    name: Routes.changePassword.link,
    component: Screens.ChangePasswordScreen
  },
  loyaltyCards: {
    name: Routes.loyaltyCards.link,
    component: Screens.LoyaltyCardsScreen
  },
  subscriptionCards: {
    name: Routes.subscriptionCards.link,
    component: Screens.SubscriptionCardsScreen
  },
  certificateCards: {
    name: Routes.certificateCards.link,
    component: Screens.CertificateCardsScreen
  }
}

export { Routes, defaultRoute, RouteScreens }
