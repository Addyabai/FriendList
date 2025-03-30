import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const FriendDetails = () => {
  const { name, age, image, favoriteColor, zodiacSign } = useLocalSearchParams();

  return (
    <ImageBackground
      source={require('../../assets/images/bikinibottom.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay for overall contrast */}
      <View style={styles.overlay}>
        <Image source={Number(image)} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <View style={styles.detailsBox}>
          <Text style={styles.age}>{age} years old</Text>
          <Text style={styles.detail}> Favorite Color: {favoriteColor}</Text>
          <Text style={styles.detail}> Zodiac Sign: {zodiacSign}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  detailsBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '87CEEB',
  },
  age: {
    fontSize: 22, 
    color: '#2d3436',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18, 
    color: '#2d3436', 
    marginTop: 5,
  },
});

export default FriendDetails;
