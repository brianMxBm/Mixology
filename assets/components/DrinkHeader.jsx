import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
//TODO: All of this data is static, it needs to be queried.
export default function DrinkCategoryHeader() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hey,</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>Brian</Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: colors.black }}>
            What are you craving?
          </Text>
        </View>
        <Image
          source={require('../images/profilePicture.png')}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
    </SafeAreaView>
  );
}
