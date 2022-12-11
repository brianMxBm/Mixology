import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon, { Icons } from '../theme/icons';
import React, { useState, useEffect } from 'react';
import colors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  greetingStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 32,
    color: colors.lightBlack,
    marginTop: 5,
    fontWeight: 'light',
  },
  nameStyle: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default function Header({ user }) {
  const navigation = useNavigation();
  const [hour, setCurrentHour] = useState();
  useEffect(() => {
    var date = new Date();
    var hour = date.getHours();
    setCurrentHour(hour);
  }, []);

  if (!user) {
    return <Text>hey</Text>;
  }

  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.greetingStyle}>
            {hour >= 12 ? (hour >= 16 ? 'Good Evening,' : 'Good Afternoon,') : 'Good Morning,'}
          </Text>
          <Text style={styles.nameStyle}>
            {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../images/profilePicture.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
