import { AppRoutes } from '@/app/shared/core/routes/routes_names';
import { Link, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const UserPage = () => {

  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>User page - {id}</Text>
      <Link href={AppRoutes.HOME}>Go to home</Link>
    </View>
  )
}

export default UserPage