import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { RNPhotoEditor } from 'react-native-photo-editor';
import { getDeviceWidth } from 'src/common/utilities/utilities';
import {
  PESDK,
  PhotoEditorModal,
  Configuration,
} from 'react-native-photoeditorsdk';

interface UploadProps {
  navigation: any;
}

const Upload = (props: UploadProps) => {
  const { navigation } = props;

  const [uri, setUri] = React.useState('');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e: any) => {
      // Prevent default behavior
      e.preventDefault();

      // Do something manually
      // ...
      // Open Image Library:
      ImagePicker.launchImageLibrary({}, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          PESDK.openEditor(response.uri);
        }
      });
    });

    return unsubscribe;
  }, []);

  return (
    <Image
      source={{ uri }}
      style={{ width: getDeviceWidth(), height: getDeviceWidth() }}
    />
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {},
});
