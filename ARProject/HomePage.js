import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
//import MultiSelect from 'react-native-multiselectview';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

export default function HomePage() {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('IDScannerPage');
  };

  

  return (
    <View style={styles.container}>
      <Home handleButtonPress={handleButtonPress} />
    </View>
  );
}

const Home = ({ handleButtonPress }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Austin, Texas');

  return (
  //   <View style={styles.container}>


  //   <View style={styles.top}>
  //     <View style={styles.triangle} />
  //     <View style={styles.locationContainer}>
  //       {/* <AntDesign name="down" size={16} style={styles.downIcon} /> */}
  //       <Text style={styles.locationText}>Austin, TX</Text>
  //     </View>
  //     <Text style={styles.greetingText}>Good Afternoon, Ryan</Text>
  //     <TextInput
  //       placeholder="Search Museums"
  //       style={styles.searchInput}
  //     />
  //   </View>
  //   <View style={styles.bottom}>
  //     <Text style={styles.sectionTitle}>Museums Near You</Text>
  //     {/* Replace with images */}
  //     <View style={styles.museumContainer} />
  //     <View style={styles.separator} />
  //     <View style={styles.toolbar}>
  //       <Ionicons name="home-outline" size={24} style={styles.icon} />
  //       <View style={styles.scanButton}>
  //         <Entypo name="camera" size={32} style={styles.scanIcon} />
  //       </View>
  //       <Ionicons name="person-outline" size={24} style={styles.icon} />
  //     </View>

      
  //   </View>
    
  // </View>

  
    <View style={styles.homeContainer}>
       
       {/* <DropDownPicker
        items={[
          { label: 'Austin, Texas', value: 'Austin, Texas' },
          { label: 'Dallas, Texas', value: 'Dallas, Texas' },
          { label: 'Houston, Texas', value: 'Houston, Texas' },
          { label: 'San Antonio, Texas', value: 'San Antonio, Texas' },
        ]}
        defaultValue={location}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdownStyle}
        itemStyle={styles.dropdownItemStyle}
        dropDownStyle={styles.dropDownStyle}
        onChangeItem={(item) => setLocation(item.value)}
      /> */}
<StatusBar hidden={true} />
<Image
        source={require('./location.png')}
        style={styles.locationImage}
      />

      <Text style={styles.title}>Good Afternoon, Ryan</Text>
      
      {/* <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        //style={styles.searchBar}
      /> */}
      
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
  // triangle: {
  //   width: 0,
  //   height: 0,
  //   backgroundColor: 'transparent',
  //   borderStyle: 'solid',
  //   borderRightWidth: 200,
  //   borderTopWidth: 200,
  //   borderRightColor: 'orange',
  //   borderTopColor: 'transparent',
  //   transform: [{ rotate: '0deg' }],
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  // },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#000',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50, // Add padding to avoid button overlapping with content
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 40,
  },
  locationImage: {
    width: 270,
    height: 50,
    borderRadius: 150,
    marginBottom: 80,
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
    backgroundColor: '#FFF',
  },
  button: {
    flex: 3,
    backgroundColor: '#F2B56B',
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
  container: {
    flex: 1,
  },
  triangleContainer: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 500,
    borderRightWidth: 500,
    borderBottomWidth: 1000,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFA500',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  triangle: {
    opacity: 0.4,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 500,
    borderRightWidth: 500,
    borderBottomWidth: 1000,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFA500',
  },
  topContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  locationPicker: {
    color: 'black',
    marginBottom: 8,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  searchBar: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
    width: 300
  },
  museumsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  museumsList: {
    marginBottom: 16,
  },
  museumItem: {
    marginRight: 16,
  },
  museumImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  museumName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  toolbar: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  toolbarIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  toolbarSeparator: {
    width: 16,
    height: '100%',
  },
  toolbarScanButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIcon: {
    width: 32,
    height: 32,
  },
});