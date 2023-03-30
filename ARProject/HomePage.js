import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    //ArtInfoPage
    navigation.navigate('IDScannerPage');
  };

  return (
    <View style={styles.container}>
      <Home handleButtonPress={handleButtonPress} />
    </View>
  );
}

const Home = ({ handleButtonPress }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Museo</Text>
      <Text style={styles.subtitle}>Your Interactive Museum Guide</Text>
      <Image source={require('./Logo.png')} style={styles.image} />
      <View style={styles.tabContainer}>
        <View style={styles.tab} />
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Start scanning!</Text>
        </TouchableOpacity>
        <View style={styles.tab} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50, // Add padding to avoid button overlapping with content
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 40,
  },
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  tab: {
    flex: 1,
    backgroundColor: '#000',
  },
  button: {
    flex: 3,
    backgroundColor: '#D4AF37',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});