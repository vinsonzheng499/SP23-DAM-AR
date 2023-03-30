//this is a barebones scanner page
//in which the user inputs an integer
//for the id of the art work they want to retrieve
//from the sql database, and then it should go to the page
//with the art work's information. this is a lower level
//version before we actually implemented it with NFC tags
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import ScanPageSample from './ScanPageSample';
import * as Font from 'expo-font';

export default function ArtworkSearch({ navigation }) {
  const [artworkID, setArtworkID] = useState('');
  const backgroundImage = require('./background-image.png');

  const handlePress = () => {
    // Here you can make a network request to your backend to retrieve the artwork data
    // and then navigate to the artwork information page
    // TODO: Backend

    //navigation.navigate('ArtworkInformation', { artworkID: artworkID });
    navigation.navigate('ScanPageSample');
  }

  const [fontLoaded, setFontLoaded] = useState(false);


  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Search for an Artwork</Text>

    //   <View style={styles.inputContainer}>
    //     <Text style={styles.label}>Artwork ID:</Text>
    //     <TextInput
    //       style={styles.input}
    //       value={artworkID}
    //       onChangeText={setArtworkID}
    //       keyboardType="number-pad"
    //     />
    //   </View>

    //   <TouchableOpacity style={styles.button} onPress={handlePress}>
    //     <Text style={styles.buttonText}>Submit</Text>
    //   </TouchableOpacity>
    // </View>
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.rectangle}>
      <Text style={styles.title}>Ready to Scan</Text>
      <View style={styles.logoContainer}>
        <Image source={require('./phone-logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.description}>Hold your iPhone near the item to learn more about it.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  rectangle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#121212',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 36,
  //   fontWeight: 'bold',
  //   marginBottom: 40,
  //   color: '#E4A21D',
  //   fontFamily: 'Helvetica Neue',
  //   letterSpacing: 2,
  // },
  // inputContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // label: {
  //   fontSize: 24,
  //   marginRight: 10,
  //   color: '#EFEFEF',
  //   fontFamily: 'Helvetica Neue',
  //   letterSpacing: 1,
  // },
  // input: {
  //   flex: 1,
  //   backgroundColor: '#EFEFEF',
  //   height: 40,
  //   borderRadius: 10,
  //   paddingHorizontal: 10,
  //   fontFamily: 'Helvetica Neue',
  //   fontSize: 20,
  //   letterSpacing: 1,
  // },
  // button: {
  //   backgroundColor: '#E4A21D',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 10,
  // },
  // buttonText: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#121212',
  //   fontFamily: 'Helvetica Neue',
  //   letterSpacing: 2,
  // },
});