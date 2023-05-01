import React from 'react'
import { Layout, Text, Button } from '@ui-kitten/components'
import { useDispatch } from 'react-redux'
import { clearUser } from '~/store/user/userSlice'

export default function ProfileScreen() {
  const dispatch = useDispatch()

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">ProfileScreen</Text>

      <Button onPress={() => dispatch(clearUser())}>Выйти</Button>
    </Layout>
  )
}
