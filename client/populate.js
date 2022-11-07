import axios from 'axios';
import { collection, addDoc, getCountFromServer } from 'firebase/firestore';
import { db } from './firebase-config';
import { firebaseKey } from '@env';

const drinkCategories = [
  'margarita',
  'beer',
  'ale',
  'scotch',
  'wine',
  'sake',
  'bloody',
  'cocktail',
  'brandy',
  'tequila',
  'egg',
  'whiskey',
  'lemonade',
  'lime',
  'honey',
  'martini',
  'sour',
];

export default async function populateFirebase() {
  const res = await axios.get(`https://api.api-ninjas.com/v1/cocktail?name=${name}`, {
    responseType: 'json',
    headers: {
      'X-Api-Key': firebaseKey,
    },
  });
  res.data.forEach((drink) => {
    createDrink(drink);
  });
}

const createDrink = async (drink) => {
  const drinkCollectionRef = collection(db, 'drinks');
  await addDoc(drinkCollectionRef, drink);
};

export const countCollection = async () => {
  const count = collection(db, 'drinks');
  const snapshot = await getCountFromServer(count);
  console.log(snapshot.data().count);
};
