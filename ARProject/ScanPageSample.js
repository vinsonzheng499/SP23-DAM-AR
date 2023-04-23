import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function ScanPageSample({ navigation }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg' }}
        style={styles.image}
      />
      <View style={styles.rectangle} />

      <ImageBackground
        source={{ uri: 'https://cdn.discordapp.com/attachments/1098374063015067679/1099791480677208074/triangle.png' }}
        style={styles.bgimage}
        >

<View style={styles.section}>
        <Text style={styles.sectionTitle}>About the Artwork</Text>
        <Text style={styles.sectionText}>
          The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. It is considered one of the most famous paintings in the world and is housed at the Louvre Museum in Paris.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the Artist</Text>
        <Text style={styles.sectionText}>
          Leonardo da Vinci was an Italian polymath whose areas of interest included invention, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography.
        </Text>
      </View>

        <Text style={styles.sectionTitle}>Related Artworks</Text>
        <View style={styles.related}>
          <Image
            source={{ uri: 'https://th-thumbnailer.cdn-si-edu.com/pudYlLwHsVzaUG6P4R6IibTiA0g=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/c6/87/c687edd3-7917-4c25-b112-c032f15ded66/4861890322_136909aa62_b.jpg' }}
            style={styles.relatedImage}
          />
          <Text style={styles.relatedText}>Vitruvian Man</Text>
        </View>
        
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1200px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg' }}
            style={styles.relatedImage}
          />
          <Text style={styles.relatedText}>The Last Supper</Text>
          
      
       </ImageBackground>



      <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
        {isPlaying ? (
          <FontAwesome name="pause" size={36} color="#FFFFFF" />
        ) : (
          <AntDesign name="caretright" size={36} color="#FFFFFF" />
        )}
      </TouchableOpacity>

      
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgimage: {
    width: '100%',
    height: 500,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
   position: 'relative',
  },

  section: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E4A21D',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
  },
  sectionText: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 40,
    color: '#EFEFEF',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 1,
    lineHeight: 30,
  },
  related: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  relatedImage: {
    width: '80%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  relatedText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 40,
    color: '#EFEFEF',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
  },
  rectangle: {
    width: 400,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#4F7B48',
  },
  playButton: {
    position: 'absolute',
    top: '49%',
    left: '7%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F7B48',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    
    borderColor: '#FFFFF',
  },

});