import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardProps } from './Interface/CardProps';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = (props: CardProps) => {
  /**
   * Destructure props here
   */
  const { user, memesUri, type } = props;

  return (
    <View style={styles.container}>
      <CardHeader userName={user.name} userProfilePic={user.profilePic} />
      <CardBody type={type} memesUri={memesUri} />
      <CardFooter />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
});
