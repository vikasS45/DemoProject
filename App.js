import React, {useState, useCallback} from 'react';
import {Button, View, Alert, StyleSheet, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const width = Dimensions.get('screen').width;
const App = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <View>
      <YoutubePlayer height={300} play={playing} videoId={'84WIaK3bl_s'} />
      <View style={styles.hideDots} />
      <View style={styles.hide} />
    </View>
  );
};

const styles = StyleSheet.create({
  hide: {
    backgroundColor: 'transparent',
    height: 60,
    width: 180,
    marginTop: 100,
    alignSelf: 'flex-end',
    // marginRight:50,
  },
  hideDots: {
    backgroundColor: 'transparent',
    height: 60,
    width: width,
    marginTop: -300,
    alignSelf: 'flex-end',
  },
});

export default App;
