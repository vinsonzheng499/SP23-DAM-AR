import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AudioButton from './AudioButton';
import Sound from 'react-native-sound';

export default function ScanPageSample({ navigation }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const sound = new Sound('/ARProject/assets/sample_audio_5mb.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
  });
  const playSound = () => {
    setIsPlaying(true);
    sound.play((success) => {
      if (success) {
        setIsPlaying(false);
      } else {
        console.log('Failed to play the sound');
      }
    });
  };

  const pauseSound = () => {
    setIsPlaying(false);
    sound.pause();
  };
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the progress every second
      setProgress(progress => progress + 0.1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSliderChange = value => {
    setProgress(value);
  };
  
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{ uri: 'https://cdn.discordapp.com/attachments/1098374063015067679/1099859602356572231/appbg.png' }}
        style={styles.bgimage}
        >

    <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg' }}
        style={styles.image}
      />
      <View style={styles.rectangle}>
      <Image
        source={{ uri: 'https://cdn.discordapp.com/attachments/674457403730690068/1099884304856797224/soundbar.png' }}
         style={styles.audiobar}
      />
        </View> 

    <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the Artwork</Text>
        <Text style={styles.sectionText}>
          The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. It is considered one of the most famous paintings in the world and is housed at the Louvre Museum in Paris.
        </Text>
      </View>

      {/* <View>
        <AudioButton audioPath={'ARProject\assets\sample_audio_5mb.mp3'} />
      </View> */}

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
        
        <View style={styles.related}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1200px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg' }}
            style={styles.relatedImage}
          />
          <Text style={styles.relatedText}>The Last Supper</Text>
          </View>
          
       </ImageBackground>

      <TouchableOpacity style={styles.playButton} onPress={isPlaying ? pauseSound : playSound}>
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
    height: 2000,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
   position: 'relative',
  },
  audiobar: {
    marginTop: 20,
    marginLeft: 90,
    width: '60%',
    height: 60,
  },

  section: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#E4A21D',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
  },
  sectionText: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 40,
    color: '#606060',
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
    color: '#606060',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
  },
  rectangle: {
    width: 300,
    alignSelf: 'center',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#4F7B48',
  },
  playButton: {
    position: 'absolute',
    top: '26.9%',
    left: '17%',
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