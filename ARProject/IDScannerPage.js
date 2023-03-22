//this is a barebones scanner page
//in which the user inputs an integer
//for the id of the art work they want to retrieve
//from the sql database, and then it should go to the page
//with the art work's information. this is a lower level
//version before we actually implemented it with NFC tags
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function ArtworkSearch({ navigation }) {
  const [artworkID, setArtworkID] = useState('');

  const handlePress = () => {
    // Here you can make a network request to your backend to retrieve the artwork data
    // and then navigate to the artwork information page
    // TODO: Backend

    navigation.navigate('ArtworkInformation', { artworkID: artworkID });
  }

  const [fontLoaded, setFontLoaded] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for an Artwork</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Artwork ID:</Text>
        <TextInput
          style={styles.input}
          value={artworkID}
          onChangeText={setArtworkID}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#E4A21D',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    marginRight: 10,
    color: '#EFEFEF',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 1,
  },
  input: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#E4A21D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#121212',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
  },
});