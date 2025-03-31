import { AppRoutes } from '@/app/shared/core/routes/routes_names'
import { Link, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export type UserPageProps = {
  id: string;
}


const UserPage = () => {

  const params = useLocalSearchParams<UserPageProps>();
  const { id } = params;

  return (
    <View>
      <Text>User page - {id}</Text>
      <Link href={AppRoutes.HOME}>Go to home</Link>
    </View>
  )
}

export default UserPage