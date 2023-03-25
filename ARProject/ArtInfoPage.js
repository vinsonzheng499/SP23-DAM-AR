import React from 'react';
import { View } from 'react-native';
import Artwork from './Artwork';

const artworks = [
    {
        id: 1,
        title: 'Mona Lisa',
        description: 'A portrait by Leonardo da Vinci',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/402px-Mona_Lisa.jpg'
      },
      {
        id: 2,
        title: 'Starry Night',
        description: 'A painting by Vincent van Gogh',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/480px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
      },
      // add more artworks here
];

const ArtInfoPage = () => {
    return (
        <View>
      {artworks.map((artwork) => (
        <Artwork
          key={artwork.id}
          title={artwork.title}
          description={artwork.description}
          imageUrl={artwork.imageUrl}
        />
      ))}
    </View>
    );
};

export default ArtInfoPage;