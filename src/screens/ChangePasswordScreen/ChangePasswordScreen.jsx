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
// import { useSelector, useDispatch } from 'react-redux'
// import { selectUser } from '~/store/user/userSelectors'

export default function ChangePasswordScreen({ navigation }) {
  const styles = useStyleSheet({ ...globalStyles, ...themedStyles })
  // const user = useSelector(selectUser)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [secureTextPassword, setSecureTextPassword] = useState(true)
  const [secureTextNewPassword, setSecureTextNewPassword] = useState(true)

  const toggleSecureTextPassword = () => {
    setSecureTextPassword(prevValue => (prevValue = !prevValue))
  }

  const toggleSecureTextNewPassword = () => {
    setSecureTextNewPassword(prevValue => (prevValue = !prevValue))
  }

  return (
    <SafeAreaView style={styles._safe}>
      <TopNavigation
        title={Routes.profile.title}
        subtitle={Routes.changePassword.title}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles._wrapper}>
        <Layout level="2" style={styles.container}>
          <Text style={styles.text}>
            Пароль должен содержать не менее 8 символов
          </Text>
          <Input
            value={password}
            onChangeText={nextValue => setPassword(nextValue)}
            style={styles.password}
            status="primary"
            inputMode="text"
            placeholder="Текущий пароль"
            secureTextEntry={secureTextPassword}
            accessoryRight={props => (
              <TouchableWithoutFeedback onPress={toggleSecureTextPassword}>
                <Icon
                  {...props}
                  name={secureTextPassword ? 'eye-off' : 'eye'}
                />
              </TouchableWithoutFeedback>
            )}
          />

          <Input
            value={newPassword}
            onChangeText={nextValue => setNewPassword(nextValue)}
            style={styles.password}
            status="primary"
            inputMode="text"
            placeholder="Новый пароль"
            secureTextEntry={secureTextNewPassword}
            accessoryRight={props => (
              <TouchableWithoutFeedback onPress={toggleSecureTextNewPassword}>
                <Icon
                  {...props}
                  name={secureTextNewPassword ? 'eye-off' : 'eye'}
                />
              </TouchableWithoutFeedback>
            )}
          />

          <Button>Сохранить</Button>
        </Layout>
      </View>
    </SafeAreaView>
  )
}

const themedStyles = StyleService.create({
  text: {
    marginBottom: 24
  },
  password: {
    marginBottom: 24
  },
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 16
  }
})
