import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { SecondaryColor } from '../../../src/common/style/Colors';
import { getDeviceWidth } from '../../../src/common/utilities/utilities';

const width = getDeviceWidth();

interface CardFooterProps {}

const CardFooter = (props: CardFooterProps) => {
  return (
    <View style={styles.footerContainer}>
      <View>
        <SimpleLineIcons name="heart" size={24} />
        <Text>1.1k </Text>
      </View>
      <View>
        <SimpleLineIcons name="speech" size={24} />
        <Text>1.1k </Text>
      </View>
      <View>
        <SimpleLineIcons name="share" size={24} />
        <Text>100 </Text>
      </View>
      <View>
        <SimpleLineIcons name="paper-plane" size={24} />
        <Text>100 </Text>
      </View>
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  footerContainer: {
    height: 60,
    width,
    backgroundColor: SecondaryColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
});
