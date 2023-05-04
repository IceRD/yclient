import { DefaultTheme } from '@react-navigation/native'

export const navigationContainerTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a4cc38',
    background: '#383838'
    // card: 'rgb(255, 255, 255)',
    // text: 'rgb(28, 28, 30)',
    // border: 'rgb(216, 216, 216)',
    // notification: 'rgb(255, 59, 48)',
  }
}

export const stackNavigatorOptions = {
  headerShown: false
}
