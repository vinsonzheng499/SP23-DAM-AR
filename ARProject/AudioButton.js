import React from 'react';
import { Button } from 'react-native';
import Sound from 'react-native-sound';

const AudioButton = ({ audioPath }) => {
  const playAudio = () => {
    const sound = new Sound(audioPath, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  return (
    <Button title="Play Audio" onPress={playAudio} />
  );
};

export default AudioButton;
