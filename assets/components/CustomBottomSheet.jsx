import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useRef, useState, useCallback, forwardRef } from 'react';
import * as Animatable from 'react-native-animatable';
import BottomSheet from '@gorhom/bottom-sheet';
import { useImperativeHandle, useEffect } from 'react';
import colors from '../theme/colors';
import { useAnimatedStyle, interpolateColor } from 'react-native-reanimated';
import Button from './Button';
import { WIN_WIDTH } from '../../constants/dimensions';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.black,
  },
  textStyle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 18,
  },
});

//TODO: This should be a component, lotta stuff here is hardcoded for a specific type of
function CustomBottomSheet({ image }, ref) {
  useImperativeHandle(ref, () => ({
    open,
    close,
  }));
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ['28%'];
  const navigation = useNavigation();
  //TODO: This isn't the best way to do this, but I need this new ref for the bottomSheet, the other ref prop is for getting the functions in here to the paren
  const currRef = useRef(null);
  const open = () => {
    currRef.current.expand();
  };

  const close = () => {
    currRef.current.close();
  };

  return (
    <BottomSheet
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      onClose={() => setIsOpen(false)}
      ref={currRef}
    >
      <Animatable.View animation="fadeInUp" delay={100} easing="ease-in-out" duration={400}>
        <View style={{ alignItems: 'center' }}>
          <Text>Upload Profile Picture</Text>
        </View>

        <Button
          onPress={() => console.log('Uploaded')}
          label="Choose from library"
          buttonContainerStyle={{
            height: 55,
            borderRadius: 12,
            backgroundColor: colors.orange,
            marginTop: 20,
          }}
          labelStyle={{ fontWeight: 'bold', color: colors.white, fontSize: 15 }}
        />
        <Button
          onPress={() => navigation.navigate('Camera')}
          label="Take Photo"
          buttonContainerStyle={{
            height: 55,
            borderRadius: 12,
            backgroundColor: colors.orange,
            marginTop: 20,
          }}
          labelStyle={{ fontWeight: 'bold', color: colors.white, fontSize: 15 }}
        />
      </Animatable.View>
    </BottomSheet>
  );
}

export default forwardRef(CustomBottomSheet);
