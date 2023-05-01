import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import {
  Layout,
  Card,
  Input,
  Button,
  Text,
  CheckBox,
  useStyleSheet,
  StyleService
} from '@ui-kitten/components'

function accessoryLeft() {
  return <Text>+7</Text>
}

export default function AuthPhone() {
  const styles = useStyleSheet(themedStyles)

  const [checked, setChecked] = useState(false)
  const [phone, setPhone] = useState(false)

  function handlerSetPhone(value) {
    if (value.length > 10) {
      return
    }

    setPhone(prev => (prev = value))
  }

  return (
    <Layout level="2" style={styles.container}>
      <View style={styles.text}>
        <Text>
          Введите свой номер телефона. Сейчас на него поступит SMS или звонок.
          Отвечать на звонок не нужно.
        </Text>
      </View>

      <Input
        value={phone}
        onChangeText={nextValue => handlerSetPhone(nextValue)}
        style={styles.phone}
        status="primary"
        inputMode="numeric"
        accessoryLeft={accessoryLeft}
      />

      <View style={styles.agreement}>
        <CheckBox
          status="primary"
          checked={checked}
          onChange={v => setChecked(v)}>
          Нажимая "Получить код" вы принмаете Пользовательское соглашение и
          Политику конфиденциальности.
        </CheckBox>
      </View>

      <Button>Получить код</Button>
    </Layout>
  )
}

const themedStyles = StyleService.create({
  text: {
    marginBottom: 32
  },
  phone: {
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
