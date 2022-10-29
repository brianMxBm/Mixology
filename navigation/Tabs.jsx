import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TABS } from '../constants/dimensions';
import { BottomTabArray } from '../constants/BottomTabArray';
import Icon from '../assets/theme/icons';
import colors from '../assets/theme/colors';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Tab = createBottomTabNavigator();

export function TabButton(props) {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: '0deg' },
        1: { scale: 1, rotate: '0deg' },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.2, rotate: '0deg' },
        1: { scale: 1, rotate: '0deg' },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colors.tabsActive : colors.tabsActive} //TODO: Possibly change color.
          size={30}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: TABS.HEIGHT,
          backgroundColor: colors.tabsBackground,
          paddingTop: 8,
          borderRadius: 25,
          paddingHorizontal: 15,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
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
