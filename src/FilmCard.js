import {htmlToDomNode} from './utils';
import FilmPopup from './FilmPopup';

export default class FilmCard {
  constructor(data, hasControls, hasDescription) {
    this._data = data;
    this._title = data.title;
    this._rating = data.rating;
    this._year = data.year;
    this._duration = data.duration;
    this._genre = data.genre;
    this._posterSrc = data.posterSrc;
    this._description = data.description;
    this._commentsCount = data.commentsCount;

    this._hasControls = hasControls;
    this._hasDescription = hasDescription;

    this._element = null;
  }

  get template() {
    return (
      `<article 
        class="${this._hasControls ? `film-card` : `film-card film-card--no-controls`}">
    
        <h3 class="film-card__title">${this._title}</h3>
        <p class="film-card__rating">${this._rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${this._year}</span>
          <span class="film-card__duration">${this._duration}</span>
          <span class="film-card__genre">${this._genre}</span>
        </p>
        <img src="${this._posterSrc}" alt="" class="film-card__poster">
        
        ${this._hasDescription ? `<p class="film-card__description">${this._description}</p>` : ``}
        
        <button class="film-card__comments">${this._commentsCount} comments</button>
      
        ${this.hasControls ? `<form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
        </form>` : ``}
        
      </article>`).trim();
  }

  _openPopup() {
    const popup = new FilmPopup(this._data);
    const container = document.body;
    popup.render(container);
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._openPopup.bind(this));
  }

  render(container) {
    if (this._element) {
      container.removeChild(this._element);
      this._element = null;
    }

    this._element = htmlToDomNode(this.template);
    container.appendChild(this._element);

    this.bind();
  }
}
