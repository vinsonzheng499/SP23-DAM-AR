import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './HomePage'
import ScanPageSample from './ScanPageSample';
import IDScannerPage from './IDScannerPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ScanPageSample" component={ScanPageSample} />
        <Stack.Screen name="IDScannerPage" component={IDScannerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});