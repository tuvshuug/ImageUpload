import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function App(){
    return(
        <View >
            <YoutubePlayer
            height={300}
            play={true}
            videoId={'tQjsAJhsSw8'}
            >
            </YoutubePlayer>
            
        </View>
    );
}
