import makeFilter from './make-filter.js';
import FilmCard from './make-film-card.js';
import {getCardData} from './data';
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
      const filmCard = new FilmCard(getCardData(), hasControls, hasDescription);
      filmCard.render(prev);
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

const filtersFragment = document.createDocumentFragment();

filtersFragment.appendChild(makeFilter(`#all`, `All movies`, 0, true));
filtersFragment.appendChild(makeFilter(`#watchlist`, `Watchlist`, 23));
filtersFragment.appendChild(makeFilter(`#history`, `History`, 222));
filtersFragment.appendChild(makeFilter(`#favorites`, `Favorites`, 5355));
filters.insertBefore(filtersFragment, stats);

renderCards(filmCardsContainer, 7);
renderCards(mostRatedContainer, 2, false, false);
renderCards(mostCommentedContainer, 2, false, false);

filters.addEventListener(`click`, switchFilter);
