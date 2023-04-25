import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

const AudioButton = ({ audioPath }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Sound(audioPath, Sound.MAIN_BUNDLE, (error) => {
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound} style={styles.button}>
        <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50, // adjust this value to move the button up or down
  },
  button: {
    backgroundColor: '#228B22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default AudioButton;