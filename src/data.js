import {getRandomNumber} from './utils';

const filmNames = [
  `Побег из Шоушенка`,
  `Крестный отец`,
  `Крестный отец 2`,
  `Темный рыцарь`,
  `12 разгневанных мужчин`,
  `Список Шиндлера`,
  `Властелин колец: Возвращение Короля`,
  `Криминальное чтиво`,
  `Хороший, плохой, злой`,
  `Бойцовский клуб`,
  `Властелин колец: Братство кольца`,
  `Форрест Гамп`,
  `Звёздные войны: Эпизод 5 – Империя наносит ответный удар`,
  `Начало`,
  `Властелин колец: Две крепости`,
];

const genres = [
  `Adventure`,
  `Action`,
  `Crime`,
  `Comedy`,
  `Horror`,
];

const imgFolder = `./images/posters/`;
const posters = [
  `${imgFolder}accused.jpg`,
  `${imgFolder}blackmail.jpg`,
  `${imgFolder}blue-blazes.jpg`,
  `${imgFolder}fuga-da-new-york.jpg`,
  `${imgFolder}moonrise.jpg`,
  `${imgFolder}three-friends.jpg`,
];

const allDescriptionStrings = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;

const descriptions = allDescriptionStrings.split(`. `);

const createDescription = (descrArr, minPhraseCount, maxPhraseCount) => {
  const count = getRandomNumber(minPhraseCount, maxPhraseCount);
  const unusedDescriptions = [...descriptions];
  const resArr = [];

  for (let i = 0; i < count; i++) {
    const descrIndex = getRandomNumber(0, unusedDescriptions.length - 1);
    resArr.push(unusedDescriptions[descrIndex]);
    unusedDescriptions.slice(descrIndex, 1);
  }

  return `${resArr.join(`. `)}.`;
};

export function getCardData() {
  return {
    title: filmNames[getRandomNumber(0, filmNames.length - 1)],
    rating: getRandomNumber(1, 10, 10),
    year: getRandomNumber(1900, 2019),
    posterSrc: posters[getRandomNumber(0, posters.length - 1)],
    duration: `${getRandomNumber(0, 99)}h ${getRandomNumber(0, 59)}m`,
    genre: genres[getRandomNumber(0, genres.length - 1)],
    description: createDescription(descriptions, 1, 3),
    commentsCount: getRandomNumber(0, 999),
  };
}
