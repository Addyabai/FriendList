import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type FriendCardProps = {
  friend: {
    name: string;
    image: any;
  };
  onPress: () => void;
};

const FriendCard = ({ friend, onPress }: FriendCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={friend.image} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d4e9d7',
    padding: 15,
    marginBottom: 15,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: '#b0c4b1',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b5b4e',
    fontFamily: 'Georgia',
  },
});

export default FriendCard;
