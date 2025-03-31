import { AppRoutes } from '@/app/shared/core/routes/routes_names'
import { Link, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const UserPage = () => {

  return (
    <View>
      <Text>User page no params</Text>
      <Link href={AppRoutes.HOME}>Go to home</Link>
    </View>
  )
}

export default UserPage