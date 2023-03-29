import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NfcManager, NfcTech } from 'react-native-nfc-manager';
import * as Font from 'expo-font';

export default function IDScannerPage({ navigation }) {
  const [artworkID, setArtworkID] = useState('');

  const handlePress = () => {
    // Here you can make a network request to your backend to retrieve the artwork data
    // and then navigate to the artwork information page
    // TODO: Backend

    navigation.navigate('ArtworkInformation', { artworkID: artworkID });
  }

  const [fontLoaded, setFontLoaded] = useState(false);

  // Initialize the NFC manager
  useEffect(() => {
    NfcManager.start();
    return () => {
      NfcManager.cancelTechnologyRequest().catch(() => 0);
      NfcManager.unregisterTagEvent().catch(() => 0);
      NfcManager.stop();
    };
  }, []);

  // Handle scanned NFC tag
  const handleNfcDiscover = async (tag) => {
    const tech = NfcTech.Ndef;
    const result = await NfcManager.requestTechnology(tech, {
      alertMessage: 'Ready to read an NFC tag'
    });
    const ndef = await NfcManager.getNdefMessage();
    if (ndef) {
      const id = ndef[0].payload;
      setArtworkID(id);
      handlePress();
    }
    await NfcManager.closeTechnology(tech);
  };

  // Enable foreground dispatch for NFC tag scanning
  useEffect(() => {
    const enableForegroundDispatch = async () => {
      try {
        await NfcManager.registerTagEvent(handleNfcDiscover);
      } catch (ex) {
        console.warn('Error enabling NFC foreground dispatch', ex);
      }
    };
    enableForegroundDispatch();
    return () => {
      NfcManager.unregisterTagEvent().catch(() => 0);
    };
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan or Search for an Artwork</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Search by ID</Text>
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
