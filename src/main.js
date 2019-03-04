import makeFilter from './make-filter.js';
import makeFilmCard from './make-film-card.js';
import {getRandomNumber} from './utils';

const filters = document.querySelector(`.main-navigation`);
const filmCardsContainer = document.querySelector(`.films-list__container`);
const mostRatedContainer = document.querySelector(`.films-list--extra .films-list__container`);
const mostCommentedContainer = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);

const renderCards = (dist, count, hasControls = true, hasDescription = true) => {
  const cards = new Array(count)
    .fill()
    .map(() => makeFilmCard(hasControls, hasDescription));
  dist.insertAdjacentHTML(`beforeend`, cards.join(``));
};

const switchFilter = (evt) => {
  let target = evt.target;
  const activeFilter = document.querySelector(`.main-navigation__item--active`);
  const stats = document.querySelector(`.main-navigation__item--additional`);
  const allFilms = document.querySelectorAll(`.films-list .films-list__container .film-card`);

  while (target !== filters) {
    if (target.tagName === `A` && target !== activeFilter && target !== stats) {
      activeFilter.classList.remove(`main-navigation__item--active`);
      target.classList.add(`main-navigation__item--active`);

      Array.prototype.forEach.call(allFilms, (node) => node.parentNode.removeChild(node));

      renderCards(filmCardsContainer, getRandomNumber(1, 10));

      return;
    }
    target = target.parentNode;
  }
};

filters.insertAdjacentHTML(`afterbegin`, makeFilter(`#favorites`, `Favorites`, 5355));
filters.insertAdjacentHTML(`afterbegin`, makeFilter(`#history`, `History`, 222));
filters.insertAdjacentHTML(`afterbegin`, makeFilter(`#watchlist`, `Watchlist`, 23));
filters.insertAdjacentHTML(`afterbegin`, makeFilter(`#all`, `All movies`, 0, true));

renderCards(filmCardsContainer, 7);
renderCards(mostRatedContainer, 2, false, false);
renderCards(mostCommentedContainer, 2, false, false);

filters.addEventListener(`click`, switchFilter);
