import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomePage from './HomePage'
import ScanPageSample from './ScanPageSample';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen
          name="ScanPageSample"
          component={ScanPageSample}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('HomePage')}
              >
                <Ionicons name="close-outline" size={30} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#121212',
            },
          })}
        />
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
  headerButton: {
    marginLeft: 20,
  },
});