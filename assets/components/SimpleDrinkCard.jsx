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
  rating: {
    fontFamily: 'Avenir-Roman',
    fontSize: 15,
    color: colors.textDark,
    fontWeight: 'bold',
  },
});

export default function SimpleDrinkCard({ drink }) {
  const navigation = useNavigation();
  const user = useContext(UserContext);

  if (!drink) {
    //TODO: Implement Loading Screen.
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableHighlight
      underlayColor={colors.white}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', { drink })}
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <View style={styles.card}>
        <View styke={{ alignItems: 'flex-end' }}>
          {user ? (
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
              }}
            >
              <Icon type={Icons.FontAwesome} size={30} name={'heart'} color={colors.orange} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{
            marginTop: 5,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: drink.image }}
            style={{ resizeMode: 'contain', height: 105, width: 100 }}
          />
          <View
            style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          ></View>
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
              marginTop: 10,
            }}
          >
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.black,
                fontFamily: 'Avenir-Roman',
              }}
            >
              {drink.category.toUpperCase()}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon type={Icons.FontAwesome} size={15} name={'heart'} color={colors.orange} />
              <Text style={styles.rating}>24</Text>
              <Icon
                style={{ marginLeft: 5 }}
                type={Icons.FontAwesome}
                size={15}
                name={'star'}
                color={colors.black}
              />
              <Text style={styles.rating}>54</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
