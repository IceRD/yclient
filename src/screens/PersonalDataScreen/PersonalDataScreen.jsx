import React, { useEffect, useState } from 'react'
import { Dimensions, View, SafeAreaView, Image } from 'react-native'
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Text,
  Layout,
  Input,
  Button
} from '@ui-kitten/components'
import { TopNavigation } from '~/components'
import { globalStyles } from '~/theme'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '~/store/user/userSelectors'
import { Routes } from '~/router/routes'

export default function PersonalDataScreen({ navigation }) {
  const styles = useStyleSheet({ ...globalStyles, ...themedStyles })
  const user = useSelector(selectUser)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  console.log(user)

  useState(() => {
    setName(nextValue => (nextValue = user.name))
    setPhone(nextValue => (nextValue = user.phone))
    setEmail(nextValue => (nextValue = user.email))
  }, [user])

  return (
    <SafeAreaView style={styles._safe}>
      <TopNavigation
        title={Routes.profile.title}
        subtitle={Routes.personalData.title}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles._wrapper}>
        <Layout level="2" style={styles.container}>
          <Input
            style={styles.name}
            status="primary"
            inputMode="text"
            placeholder="Имя"
            value={name}
            onChangeText={nextValue => setPhone(nextValue)}
          />
          <Input
            style={styles.phone}
            status="primary"
            inputMode="text"
            placeholder="Телефон"
            value={phone}
            onChangeText={nextValue => setEmail(nextValue)}
          />
          <Input
            style={styles.email}
            status="primary"
            inputMode="text"
            placeholder="E-mail"
            value={email}
            onChangeText={nextValue => setName(nextValue)}
          />

          <Button>Сохранить</Button>
        </Layout>
      </View>
    </SafeAreaView>
  )
}

const themedStyles = StyleService.create({
  name: {
    marginBottom: 24
  },
  phone: {
    marginBottom: 24
  },
  email: {
    marginBottom: 24
  },
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    elevation: 4
  }
})
