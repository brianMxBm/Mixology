import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import React, { useEffect, useState } from 'react';
import Icon, { Icons } from '../theme/icons';
import { WIDTH, HEIGHT } from '../../constants/dimensions';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  cardWrapper: {
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    borderRadius: 25,
    padding: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    width: WIDTH * 0.9,
    height: HEIGHT * 0.2,
    borderWidth: 2,
  },
  cardLeft: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRight: {
    marginLeft: -10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  day: {
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
    color: colors.black,
    fontSize: 80,
  },
  month: {
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
    color: colors.lightBlack,
    fontSize: 20,
  },
  popularTopText: {
    marginLeft: 5,
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
    fontWeight: 'bold',
  },
  popularCardImage: {
    width: 80,
    height: 110,
    resizeMode: 'contain',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: {
    fontFamily: 'Avenir-Roman',
    fontSize: 15,
    color: colors.textDark,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  popularCardBottom: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    right: 20,
  },
});

export default function DailyDrink() {
  const [currentDate, setCurrentDate] = useState({});
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]); //TODO: Implement With Redux

  useEffect(() => {
    var today = new Date();
    var day = today.toLocaleString('default', { day: 'numeric' });
    var month = today.toLocaleString('default', { month: 'long' });
    setCurrentDate(() => ({
      today: day,
      currMonth: month,
    }));
  }, []);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardLeft}>
            <Text style={styles.day}>{currentDate.today}</Text>
            <Text style={styles.month}>{currentDate.currMonth}</Text>
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.popularTopText}>Martini Bomb</Text>
            <Image source={require('../images/martiniData.png')} style={styles.popularCardImage} />
          </View>
          <View style={styles.popularCardBottom}>
            <Icon type={Icons.FontAwesome} size={24} name={'heart'} color={colors.orange} />
            <Text style={styles.rating}>24</Text>
            <Icon type={Icons.FontAwesome} size={24} name={'star'} color={colors.black} />
            <Text style={styles.rating}>54</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
