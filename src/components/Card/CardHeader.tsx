import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { CardHeaderProps } from './Interface/CardHeaderProps';
import { styles } from './style/CradHeaderStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { defaultIconSize } from '../../../src/common/style/TypeGraphy';

const CardHeader = (props: CardHeaderProps) => {

  const { userName, userProfilePic } = props;

  return (
    <View style={styles.cardHeadercontainer}>
        <View style={styles.userProfilePicContainer}>
            <Image style={styles.userProfilePic} source={{ uri: userProfilePic }} />
        </View>
        <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>
        </View>
        <View style={styles.moreActionContainer}>
            <SimpleLineIcons name="options-vertical" size={defaultIconSize - 4} />
        </View>
    </View>
  );
};

export default CardHeader;


