import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { getDeviceWidth } from '../../../src/common/utilities/utilities';
import Video from 'react-native-video';

const width = getDeviceWidth();

interface CardBodyProps {
  type: number;
  memesUri: string;
}

const CardBody = (props: CardBodyProps) => {
  const [puased, setPaused] = React.useState<boolean>(true);

  const { memesUri, type } = props;

  return (
    <View style={styles.container}>
      {type === 1 ? (
        <Image style={styles.memesImage} source={{ uri: memesUri }} />
      ) : (
        <Video
          source={{ uri: memesUri }}
          onError={() => {
            console.log('Error');
          }}
          style={styles.memesVideo}
          poster="cover"
          selectedVideoTrack={{
            type: 'resolution',
            value: 144,
          }}
        />
      )}
    </View>
  );
};

export default CardBody;

const styles = StyleSheet.create({
  container: {},
  memesImage: {
    height: width,
    width,
  },
  memesVideo: {
    aspectRatio: 16 / 9,
    width,
  },
});
