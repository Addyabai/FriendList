import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import FriendCard from '../components/FriendCard';
import { friends } from '../data/friendsData';
import { useRouter } from 'expo-router';

type Friend = {
  id: string;
  name: string;
  age: number;
  image: string;
  favoriteColor: string;
  zodiacSign: string;
};

export default function FriendList() {
  const router = useRouter();

  const handlePress = (friend: Friend) => {
    Alert.alert(
      "Confirmation",
      `Do you want to view ${friend.name}'s profile?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            router.push({
              pathname: `/friendDetails/${friend.id}` as any,
              params: {
                name: friend.name,
                age: friend.age,
                image: friend.image,
                favoriteColor: friend.favoriteColor,
                zodiacSign: friend.zodiacSign,
              },
            });
          },
        },
      ]
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends 友達</Text>
      <FlatList
        data={friends} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendCard friend={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dff5f0',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b5b4e',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Georgia',
  },
});
