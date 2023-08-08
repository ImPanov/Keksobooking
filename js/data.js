import {
  getRandomFloat, getRandomInteger, getRandomElement, getRandomUniqueElements,
} from './utils.js';

const description = [
  'Квартира на улице Ленина с видом на парк',
  'Дом на улице Пушкина с большим двором',
  'Квартира на улице Гагарина с балконом',
  'Дом на улице Чехова с камином',
  'Квартира на улице Толстого с отдельной кухней',
];
const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const timeCheck = [
  '12:00',
  '13:00',
  '14:00',
];
const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const location = {
  x: 0,
  y: 0,
};
const titles = [
  'Квартира на улице Ленина',
  'Дом на улице Пушкина',
  'Квартира на улице Гагарина',
  'Дом на улице Чехова',
  'Квартира на улице Толстого',
  'Дом на улице Достоевского',
  'Квартира на улице Горького',
  'Дом на улице Лермонтова',
  'Квартира на улице Тургенева',
  'Дом на улице Шолохова',
];

// eslint-disable-next-line no-return-assign
const createAuthor = (index) => ({
  id: index,
  avatar: `img/avatars/user${String(index).padStart(2, '0')}.png`,
  offer: {
    title: titles[index],
    address: `${location.x = getRandomFloat(35.65000, 35.70000, 5)}, ${location.y = getRandomFloat(139.70000, 139.80000, 5)}`,
    price: getRandomInteger(1000, 20000),
    type: getRandomElement(types),
    rooms: getRandomInteger(1, 4),
    guests: getRandomInteger(1, 3),
    checkin: getRandomElement(timeCheck),
    checkout: getRandomElement(timeCheck),
    features: getRandomUniqueElements(features, getRandomInteger(1, features.length)),
    description: getRandomElement(description),
    photos: getRandomElement(photos),
  },
});

const authors = new Array(8).fill(null).map((_, i) => createAuthor(i));
// eslint-disable-next-line no-console
console.log(authors);
