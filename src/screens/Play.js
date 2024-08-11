import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Play() {
  const [playing, setPlaying] = useState(true);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={400} 
        width={350}
        play={playing}
        videoId={'8kooIgKESYE'} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
