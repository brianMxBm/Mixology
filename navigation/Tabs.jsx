import React, { useEffect, useRef } from 'react';
import Icon, { Icons } from '../assets/theme/icons';
import colors from '../assets/theme/colors';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TABS } from '../constants/dimensions';
import { BottomTabArray } from '../constants/BottomTabArray';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  color,
} from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 15,
  },
});

const Tab = createBottomTabNavigator();

export function TabButton(props) {
  /* Refactor the conditional rendering, I'm under time crunch so I did it poorly.*/

  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        {focused ? (
          <Animatable.View
            ref={viewRef}
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: colors.orange, borderRadius: 16 },
            ]}
          />
        ) : null}

        <View style={[styles.btn]}>
          {focused ? (
            <Icon type={item.type} name={item.inActiveIcon} color={colors.white} size={24} />
          ) : (
            <Icon type={item.type} name={item.inActiveIcon} color={colors.black} size={24} />
          )}
          <Animatable.View>
            {focused && (
              <Text
                style={{
                  color: colors.white,
                  paddingHorizontal: 5,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          paddingBottom: 10,
          paddingHorizontal: 12,
        },
      }}
    >
      {BottomTabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          //We dont' have tab bar labels but with this option on screen readers will be able to read out the screen name
          options={{
            tabBarShowLabel: false,
            tabBarAccessibilityLabel: true,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
