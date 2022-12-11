import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import { WIDTH } from '../../constants/dimensions';
import Icon, { Icons } from '../theme/icons';
import { UserContext } from '../../utils/UserContext';

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: colors.white,
    width: WIDTH * 0.43,
    marginHorizontal: 2,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    borderColor: colors.black,
    borderWidth: 0.9,
    marginBottom: 20,
    padding: 15,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
});

export default function SimpleDrinkCard({ drink }) {
  const navigation = useNavigation();
  const user = useContext(UserContext);
  return (
    <TouchableHighlight
      underlayColor={colors.white}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', drink)}
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <View style={styles.card}>
        <View styke={{ alignItems: 'flex-end' }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'centter',
              alignItems: 'center',
              backgroundColor: colors.gray,
            }}
          >
            {user ? (
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  backgroundColor: colors.black,
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon type={Icons.FontAwesome} size={20} name={'star'} color={colors.rating} />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: drink.image }}
            style={{ resizeMode: 'contain', height: 105, width: 100 }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.black,
              fontFamily: 'Avenir-Roman',
            }}
          >
            {drink.name}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.orange,
                fontFamily: 'Avenir-Roman',
              }}
            >
              {drink.category.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
