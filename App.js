import React, {useState, useCallback} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const App = () => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'84WIaK3bl_s'}
      />
    </View>
  );
};

export default App;
