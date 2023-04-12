// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import HomePage from './HomePage'
// import ScanPageSample from './ScanPageSample';
// import IDScannerPage from './IDScannerPage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';

// export default function App() {
//   const Stack = createStackNavigator();
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomePage">
//         <Stack.Screen name="HomePage" component={HomePage} />
//         <Stack.Screen name="IDScannerPage" component={IDScannerPage}/>
//         <Stack.Screen
//           name="ScanPageSample"
//           component={ScanPageSample}
//           options={({ navigation }) => ({
//             headerLeft: () => (
//               <TouchableOpacity
//                 style={styles.headerButton}
//                 onPress={() => navigation.navigate('HomePage')}
//               >
//                 <Ionicons name="close-outline" size={30} color="white" />
//               </TouchableOpacity>
//             ),
//             headerTitle: '',
//             headerStyle: {
//               backgroundColor: '#121212',
//             },
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerButton: {
//     marginLeft: 20,
//   },
// });

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
NfcManager.start();

function App() {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;