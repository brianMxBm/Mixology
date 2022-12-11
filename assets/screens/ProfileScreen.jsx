import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useContext, useState } from 'react';
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import { UserContext } from '../../utils/UserContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../client/firebase-config';
import React from 'react';
import colors from '../theme/colors';

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
    marginVertical: 10,
  },
  categoryItemTitle: {
    marginLeft: 0,
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  drinkItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
  },
  drinkCategory: {
    left: 50,
    marginTop: 10,
    height: 75,
    width: 75,
  },
  favoritesRightSide: {
    paddingBottom: 10,
    height: 115,
    width: WIDTH - 150 - 70,
    alignItems: 'center',
  },
  favoritesLeftSide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const drinkArray = [
  {
    id: '1',
    instructions:
      'Straight: Pour all ingredients into mixing glass with ice cubes. Shake well. Strain in chilled martini cocktail glass. Cut passion fruit in half and use as garnish. Pour prosecco into a chilled shot glass and serve alongside the martini.',
    name: 'Porn Star Martini',
    image: require('../images/drinkIcons/sake.png'),
    category: 'vodka',
    ingredients: [
      {
        id: 0,
        title: '3 cl (3 parts) vodka',
      },
      {
        id: 1,
        title: '3 cl (3 parts) Passoa',
      },
      {
        id: 2,
        title: '1 cl (1 parts) passion fruit juice',
      },
      {
        id: 3,
        title: '1 cl (1 parts) lime juice',
      },
    ],
  },
  {
    id: '0',
    instructions:
      'The shot of sake is dropped into the beer, causing it to fizz violently. The drink should then be consumed immediately.',
    name: 'Sake Bomb',
    image: require('../images/drinkIcons/sake.png'),
    category: 'sake',
    ingredients: [
      {
        id: 0,
        title: '1 pint (~16 parts) beer',
      },
      {
        id: 1,
        title: '1 shot (1.5 parts) sake',
      },
    ],
  },
  {
    id: '2',
    instructions: 'Shake or stir with ice.',
    name: 'Chicago Cocktail',
    image: require('../images/drinkIcons/sake.png'),
    category: 'brandy',
    ingredients: [
      {
        id: 0,
        title: 'Brandy',
      },
      {
        id: 1,
        title: 'Triple sec',
      },
      {
        id: 2,
        title: 'Bitters',
      },
      {
        id: 3,
        title: 'Champagne (optional)',
      },
    ],
  },
];

export default function ProfileScreen() {
  const user = useContext(UserContext);
  const [currUser, setCurrUser] = useState();

  const getUserDetails = async () => {
    try {
      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);
      setCurrUser(docSnap.data());
    } catch (error) {
      console.log(error); //TODO: Implement actualer
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!currUser) {
    //TODO: This is a buffer, there's a slight amount of time where the DOM doesn't get the user info so it says it's undefined. DOM renders first that's why.
    return userDontExist(currUser);
  }

  const newarr = new Array();
  if (currUser.favorites.length) {
    currUser.favorites.foreach((drinkEntry) => {
      newarr.push(drinkEntry);
    });
  } else {
    console.log('no favorites');
  }

  return userExists(currUser);
}

const renderCategoryItem = ({ item }) => {
  var categorystring;

  switch (item.category) {
    case 'vodka':
      categorystring = require('../images/drinkIcons/vodka.png');
      break;
    case 'sake':
      categorystring = require('../images/drinkIcons/sake.png');
      break;
    case 'whiskey':
      categorystring = require('../images/drinkIcons/whiskey.png');
      break;
    case 'brandy':
      categorystring = require('../images/drinkIcons/brandy.png');
      break;
    case 'beer':
      categorystring = require('../images/drinkIcons/beer.png');
      break;
    case 'bourbon':
      categorystring = require('../images/drinkIcons/bourbon.png');
      break;
    case 'gin':
      categorystring = require('../images/drinkIcons/gin.png');
      break;
    case 'tequila':
      categorystring = require('../images/drinkIcons/tequilla.png');
      break;
    case 'wine':
      categorystring = require('../images/drinkIcons/wine.png');
      break;
  }

  return (
    <TouchableOpacity onPress={() => console.log(item.name)}>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <View style={styles.favoritesLeftSide}>
            <Image source={item.image} style={styles.drinkItem} />
          </View>
          <View style={styles.favoritesRightSide}>
            <Text style={styles.categoryItemTitle}>{item.name}</Text>
            <Image source={categorystring} style={styles.drinkCategory} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function userDontExist() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../images/profilePicture.png')}
            style={{ height: 200, width: 200 }}
          />
          <View>
            <Text style={{ fontSize: 50, fontWeight: 'bold', left: 20 }}>Guest</Text>
            <Text style={{ fontSize: 50 }}>Favorites</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

function userExists(currUser) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../images/profilePicture.png')}
            style={{ height: 200, width: 200 }}
          />
          <View>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>
              {currUser.userName.charAt(0).toUpperCase() + currUser.userName.slice(1)}
            </Text>
            <Text style={{ fontSize: 50 }}>Favorites</Text>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView>
        <SafeAreaView>
          <FlatList
            showsVerticalScrollIndicator={true}
            numColumns={1}
            data={drinkArray}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
