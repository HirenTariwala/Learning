/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { commonStyles } from './src/common/style/commonStyles';
import RootNavigation from './src/navigation/RootNavigation';
import { PrimaryColor } from './src/common/style/Colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={PrimaryColor} />
      <RootNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  ...commonStyles,
});

export default App;
