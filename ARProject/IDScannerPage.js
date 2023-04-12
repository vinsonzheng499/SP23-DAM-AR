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
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

export default function IDScannerPage({ navigation }) {
  const backgroundImage = require('./background-image.png');
  
  const [artworkID, setArtworkID] = useState('');
  const [buttonPressed, setPressed] = useState(false);
  const [posts, setPosts] = useState([]);
  const [numPosts, setNumPosts] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  // connects to backend 
  useEffect(() => {
		const fetchPosts = async () => {
			setLoaded(false);
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			};

			fetch(
				'http://localhost:5000/artwork/' +
        artworkID,
				requestOptions
			)
				.then((response) => response.json())
				.then((result) => {
					console.log(
						'fetched: ' +
							'http://localhost:5000/artwork/' + artworkID 
					);
					var postArr = [];
					for (const [key, value] of Object.entries(result)) {
						if (key !== 'num_entries') {
							postArr.push(value);
						} else {
							setNumPosts(value);
						}
					}
					setPosts(postArr);
					setLoaded(true);
				})
				.catch((error) => console.log('error', error));
		};
		fetchPosts();
	
	}, [artworkID]);

  //nfc manager stuff
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);

      setArtworkID(tag.)
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }


  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.rectangle}>
      <Text style={styles.title}>Ready to Scan</Text>
      <View style={styles.logoContainer}>
        <Image source={require('./phone-logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.description}>Hold your iPhone near the item to learn more about it.</Text>
      <TouchableOpacity 
            style={styles.button}
            onPress={readNdef}>
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
    height: 60,
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
  }
});
