import makeFilter from './make-filter.js';
import makeFilmCard from './make-film-card.js';
import {getRandomNumber} from './utils';

const filters = document.querySelector(`.main-navigation`);
const filmCardsContainer = document.querySelector(`.films-list__container`);
const mostRatedContainer = document.querySelector(`.films-list--extra .films-list__container`);
const mostCommentedContainer = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);
const stats = document.querySelector(`.main-navigation__item--additional`);
const filmsContainer = document.querySelector(`.films-list .films-list__container`);

const renderCards = (dist, count, hasControls = true, hasDescription = true) => {
  const fragment = new Array(count)
    .fill()
    .reduce((prev) => {
      prev.appendChild(makeFilmCard(hasControls, hasDescription));
      return prev;
    }, document.createDocumentFragment());

  dist.appendChild(fragment);
};

const switchFilter = (evt) => {
  let target = evt.target;
  const activeFilter = document.querySelector(`.main-navigation__item--active`);

  while (target !== filters) {
    if (target.tagName === `A` && target !== activeFilter && target !== stats) {
      activeFilter.classList.remove(`main-navigation__item--active`);
      target.classList.add(`main-navigation__item--active`);

      filmsContainer.innerHTML = ``;

      renderCards(filmCardsContainer, getRandomNumber(1, 10));

      return;
    }
    target = target.parentNode;
  }
};

filters.insertBefore(makeFilter(`#all`, `All movies`, 0, true), stats);
filters.insertBefore(makeFilter(`#watchlist`, `Watchlist`, 23), stats);
filters.insertBefore(makeFilter(`#history`, `History`, 222), stats);
filters.insertBefore(makeFilter(`#favorites`, `Favorites`, 5355), stats);

renderCards(filmCardsContainer, 7);
renderCards(mostRatedContainer, 2, false, false);
renderCards(mostCommentedContainer, 2, false, false);

filters.addEventListener(`click`, switchFilter);
