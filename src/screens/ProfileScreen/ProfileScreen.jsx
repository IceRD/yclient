import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {
  Button,
  ListItem,
  Avatar,
  Divider,
  StyleService,
  useStyleSheet
} from '@ui-kitten/components'
import { TopNavigation } from '~/components'
import { globalStyles } from '~/theme'
import {
  ArrowRightIcon,
  BellIcon,
  LockIcon,
  СreditСardIcon
} from '~/utils/icons'
import { Routes } from '~/router/routes'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '~/store/user/userSlice'
import { selectUser } from '~/store/user/userSelectors'

export default function ProfileScreen({ navigation }) {
  const styles = useStyleSheet({ ...globalStyles, ...themedStyles })
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  return (
    <SafeAreaView style={styles._safe}>
      <TopNavigation title={Routes.profile.title} />
      <View style={styles._wrapper}>
        <View style={styles.container}>
          <ListItem
            appearance="dark"
            style={{ height: 80 }}
            title={user.name}
            description={user.phone}
            accessoryLeft={() => (
              <Avatar
                size="large"
                source={{
                  uri: user.avatar
                }}
                style={styles.avatar}
              />
            )}
            accessoryRight={<ArrowRightIcon />}
            onPress={() =>
              navigation.navigate({
                name: Routes.personalData.link
              })
            }
          />
        </View>

        <View style={styles.container}>
          <ListItem
            appearance="dark"
            title={'Нет уведомлений'}
            accessoryLeft={<BellIcon />}
            // accessoryRight={<ArrowRightIcon />}
          />
          <Divider style={styles.divider} />
          <ListItem
            appearance="dark"
            title={'Смена пароля'}
            accessoryLeft={<LockIcon />}
            accessoryRight={<ArrowRightIcon />}
            onPress={() =>
              navigation.navigate({
                name: Routes.changePassword.link
              })
            }
          />
        </View>

        <View style={styles.container}>
          <ListItem
            appearance="dark"
            title={'Карты лояльности'}
            accessoryLeft={<СreditСardIcon />}
            accessoryRight={<ArrowRightIcon />}
            onPress={() =>
              navigation.navigate({
                name: Routes.loyaltyCards.link
              })
            }
          />
          <Divider style={styles.divider} />
          <ListItem
            appearance="dark"
            title={'Абонементы'}
            accessoryLeft={<СreditСardIcon />}
            accessoryRight={<ArrowRightIcon />}
            onPress={() =>
              navigation.navigate({
                name: Routes.subscriptionCards.link
              })
            }
          />
          <Divider style={styles.divider} />
          <ListItem
            appearance="dark"
            title={'Сертификаты'}
            accessoryLeft={<СreditСardIcon />}
            accessoryRight={<ArrowRightIcon />}
            onPress={() =>
              navigation.navigate({
                name: Routes.certificateCards.link
              })
            }
          />
        </View>

        <Button onPress={() => dispatch(clearUser())} status="danger">
          Выйти
        </Button>
      </View>
    </SafeAreaView>
  )
}

const themedStyles = StyleService.create({
  avatar: {
    resizeMode: 'contain',
    backgroundColor: 'color-basic-900',
    marginRight: 10
  },
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24
  },
  divider: {
    backgroundColor: 'color-basic-800'
  }
})
