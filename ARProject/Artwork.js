import React from 'react';
import {View, Text, Image} from 'react-native';

//template for artwork data
const Artwork = ({title, description, imageUrl}) => {
    return(
        <View>
            <Image source={{uri: imageUrl}} style={{width: 200, height: 200}} />
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
};

export default Artwork;