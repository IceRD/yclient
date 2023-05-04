import React, { useEffect, useState } from 'react'
import { Dimensions, View, SafeAreaView, Image } from 'react-native'
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Text
} from '@ui-kitten/components'
import { TopNavigation } from '~/components'
import { globalStyles } from '~/theme'
import { Carousel } from 'react-native-basic-carousel'
import replaceHTML from '~/utils/replaceHTML'
import api from '~/api'

const { width } = Dimensions.get('window')
const imageWidth = width - 32

const data2 = [
  'https://assets.yclients.com/general/7/7e/7e183be11291fbe_20230504003609.png',
  'https://assets.yclients.com/general/f/f6/f66d297a969ad92_20230504003615.png',
  'https://assets.yclients.com/general/c/c2/c2e82ac768370f3_20230504003624.png',
  'https://assets.yclients.com/general/e/ec/ecd83c5ccf7aeb2_20230504003630.png',
  'https://assets.yclients.com/general/3/3b/3b5f1aa7ff355aa_20230504003638.png',
  'https://assets.yclients.com/general/b/b6/b62ac53998cf62f_20230504003644.png',
  'https://assets.yclients.com/general/f/fa/faf58aa94fee0fb_20230504003705.png',
  'https://assets.yclients.com/general/6/6c/6c69c5289c21ff9_20230504003653.png',
  'https://assets.yclients.com/general/e/ee/eef71d7662c880a_20230504003722.png',
  'https://assets.yclients.com/general/b/b8/b8939f626532947_20230504003729.png'
]

export default function AboutScreen() {
  const styles = useStyleSheet({ ...globalStyles, ...themedStyles })
  const theme = useTheme()

  const [data, setData] = useState(null)

  useEffect(() => {
    // api.about.getAbout().then(res => {
    //   console.log(res.data.data)
    // })
    setData(data2)
  }, [])

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.container}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    )
  }

  if (data === null) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.text}>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles._safe}>
      <TopNavigation title="О нас" />
      <View style={styles._wrapper}>
        <View>
          <Carousel
            style={styles.carousel}
            data={data}
            renderItem={renderItem}
            itemWidth={imageWidth}
            pagination
            paginationColor={theme['color-primary-500']}
          />
        </View>
        {data && (
          <View>
            <Text>{replaceHTML(data.description)}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const themedStyles = StyleService.create({
  carousel: {
    height: 300
  },
  image: {
    width: '100%',
    height: 300
  },
  container: {
    overflow: 'hidden'
  },
  description: {}
})
