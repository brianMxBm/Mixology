import React, { useRef, useState } from 'react';
import { View, Text, Image, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../theme/icons';
import { WINDOW } from '../../constants/dimensions';
import HeaderLogo from '../components/HeaderLogo';
import colors from '../theme/colors';
import { useFontLoader } from '../../hooks/useFonts';
import TextButton from '../components/TextButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  bannerStyle: {
    width: WINDOW.WIDTH * 1.1,
    height: WINDOW.HEIGHT * 0.8,
    marginBottom: -WINDOW.HEIGHT * 0.35,
    color: colors.black,
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    fontSize: 25,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
  },
  descriptionStyle: {
    marginTop: 12,
    textAlign: 'center',
    color: colors.black,
    fontSize: 15,
    paddingHorizontal: 24,
    fontFamily: 'Avenir-Roman',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});

export const onboardData = [
  {
    id: 1,
    title: 'Find Your Dream Drink',
    description: 'Use Mixology to find or discover new drinks!',
    bannerImage: require('../images/onBoarding/slide_01.png'),
  },
  {
    id: 2,
    title: 'Save & Share',
    description: 'Sign up to save your favorite drinks and to share with your friends!',
    bannerImage: require('../images/onBoarding/slide_02.png'),
  },
  {
    id: 3,
    title: 'New Concoctions',
    description: 'Get New Recipes Daily To Try At The Bar!',
    bannerImage: require('../images/onBoarding/slide_03.png'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState();
  const fontsLoaded = useFontLoader();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  if (!fontsLoaded) {
    <></>;
  }

  const Dots = ({ navigation }) => {
    const dotPos = Animated.divide(scrollX, WINDOW.WIDTH);
    return (
      <View style={styles.dotsContainer}>
        {onboardData.map((item, index) => {
          const dotColor = dotPos.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [colors.lightOrange, colors.orange, colors.lightOrange],
            extrapolate: 'clamp',
          });
          const dotWidth = dotPos.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 35, 10],

            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                height: 10,
                width: dotWidth,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  const FooterLogo = ({ navigation }) => {
    return (
      <View style={{ height: 160 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Dots />
        </View>
        {currentIndex < onboardData.length - 1 && (
          <View style={styles.buttonStyle}>
            <TextButton
              label="Skip"
              buttonContainerStyle={{ backgroundColor: null }}
              labelStyle={{ fontSize: 15, fontWeight: 'bold', color: colors.black }}
              onPress={() => navigation.navigate('Login')}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 80,
                borderRadius: 25,
                backgroundColor: colors.orange,
              }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            >
              <Icon type={Icons.Entypo} name="chevron-right" />
            </TouchableOpacity>
          </View>
        )}
        {currentIndex == onboardData.length - 1 && (
          <View style={{ paddingHorizontal: 24, marginVertical: 24 }}>
            <TextButton
              label="Get Started"
              buttonContainerStyle={{ height: 60, borderRadius: 25 }}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderLogo navigation={navigation} />
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={onboardData}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={onViewChangeRef.current}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: WINDOW.WIDTH, height: WINDOW.HEIGHT }}>
              <View style={{ alignItems: 'center' }}>
                <Image style={styles.bannerStyle} resizeMode="contain" source={item.bannerImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <Text style={styles.descriptionStyle}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <FooterLogo navigation={navigation} />
    </View>
  );
}
