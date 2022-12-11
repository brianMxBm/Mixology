import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { Icons } from '../theme/icons';
import { WIN_HEIGHT, WIN_WIDTH } from '../../constants/dimensions';
import colors from '../theme/colors';
import CameraButton from '../components/CameraButton';
import * as MediaLibrary from 'expo-media-library';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    paddingBottom: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    width: WIN_WIDTH,
    height: WIN_HEIGHT,
  },
});

export default function CameraScreen({ navigation }) {
  const cameraRef = useRef(null); //TODO: Refactor
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(CameraType.back); //TODO: Implement with redux.
  const [image, setImage] = useState(null); //TODO: Implement with redux.
  const [flash, setFlash] = useState(FlashMode.off); //TODO: Implement with redux.

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      MediaLibrary.PermissionStatus;
    })();
  }, []);

  if (hasCameraPermission === false) {
    return <Text>No Access To Camera</Text>;
  }

  const takePicture = async () => {
    //TODO: This should be an action in redux.
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (e) {
        //TODO: Implement actual error handling.
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    //TODO: This should be an action in redux.
    if (image) {
      console.log(image);
      try {
        //await MediaLibrary.createAssetAsync(image);
        navigation.navigate('Navigation', image);
        setImage(null);
      } catch (e) {
        //TODO: Implement actual error handling.
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40 }}>
            <CameraButton
              title={''}
              name="retweet"
              color={colors.white}
              type={Icons.Entypo}
              onPress={() => {
                setType(type === CameraType.back ? CameraType.front : CameraType.back);
              }}
            />
            <CameraButton
              title={''}
              name="flash"
              color={flash === FlashMode.off ? colors.gray : colors.white}
              type={Icons.Entypo}
              onPress={() => {
                setFlash(flash === FlashMode.off ? FlashMode.on : FlashMode.off);
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <CameraButton
              title="Re-Take"
              name="retweet"
              color={colors.white}
              type={Icons.Entypo}
              onPress={() => setImage(null)}
            />
            <CameraButton
              title="Continue"
              name="check"
              color={colors.white}
              type={Icons.Entypo}
              onPress={() => saveImage()}
            />
          </View>
        ) : (
          <CameraButton
            title="Snapshot"
            name="camera"
            color={colors.white}
            type={Icons.Entypo}
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
}
