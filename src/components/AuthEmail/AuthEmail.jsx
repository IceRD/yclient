import React, { useState, useEffect } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import {
  Layout,
  Card,
  Input,
  Button,
  Text,
  CheckBox,
  useStyleSheet,
  StyleService,
  Icon
} from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '~/store/user/userSlice'
import { selectUser, selectIsAuth } from '~/store/user/userSelectors'

export default function AuthEmail() {
  const styles = useStyleSheet(themedStyles)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const isAuth = useSelector(selectIsAuth)

  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
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
    const user = { email, password }
    dispatch(setUser({ user }))
  }

  useEffect(() => {
    // console.log(isAuth)
    // console.log(user)
  }, [user])

  return (
    <Layout level="2" style={styles.container}>
      <View style={styles.text}>
        <Text>Если у вас уже есть логин и пароль, введите их ниже.</Text>
      </View>

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

      <Button onPress={handlerSignIn}>Получить код</Button>
    </Layout>
  )
}

const themedStyles = StyleService.create({
  text: {
    marginBottom: 32
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
    borderRadius: 8
  }
})
