import React, { useState, useEffect } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import {
  Layout,
  Input,
  Button,
  Text,
  CheckBox,
  useStyleSheet,
  StyleService,
  Icon
} from '@ui-kitten/components'
import { Spinner } from '~/components'
import { useSelector, useDispatch } from 'react-redux'
import { authByEmail } from '~/store/user/userReducers'

export default function AuthEmail() {
  const styles = useStyleSheet(themedStyles)
  const dispatch = useDispatch()

  const { isLoading, errors } = useSelector(state => state.user)

  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  const handlerSignIn = () => {
    dispatch(authByEmail({ email, password }))
  }

  return (
    <Layout level="2" style={styles.container}>
      <View style={styles.text}>
        <Text>Если у вас уже есть логин и пароль, введите их ниже.</Text>
      </View>

      {errors && (
        <View style={styles.text}>
          <Text style={styles.errors}>{errors}</Text>
        </View>
      )}

      <Input
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
        style={styles.email}
        status="primary"
        inputMode="text"
        placeholder="Телефон или e-mail"
      />

      <Input
        value={password}
        onChangeText={nextValue => setPassword(nextValue)}
        style={styles.password}
        status="primary"
        inputMode="text"
        placeholder="Пароль"
        secureTextEntry={secureTextEntry}
        accessoryRight={renderIcon}
      />

      <View style={styles.agreement}>
        <CheckBox
          status="primary"
          checked={checked}
          onChange={nextValue => setChecked(nextValue)}>
          Нажимая "Получить код" вы принмаете Пользовательское соглашение и
          Политику конфиденциальности.
        </CheckBox>
      </View>

      <Button
        onPress={handlerSignIn}
        accessoryLeft={isLoading && <Spinner size="small" />}
        disabled={isLoading}>
        Войти
      </Button>
    </Layout>
  )
}

const themedStyles = StyleService.create({
  text: {
    marginBottom: 24
  },
  email: {
    marginBottom: 24
  },
  password: {
    marginBottom: 32
  },
  agreement: {
    marginBottom: 32
  },
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 16
  },
  errors: {
    color: 'color-danger-500'
  }
})
