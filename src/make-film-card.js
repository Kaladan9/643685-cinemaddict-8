import {htmlToDomNode} from './utils';

export default (hasControls, hasDescription, data) => {
  const html = `<article 
    class="${hasControls ? `film-card` : `film-card film-card--no-controls`}">

    <h3 class="film-card__title">${data.title}</h3>
    <p class="film-card__rating">${data.rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${data.year}</span>
      <span class="film-card__duration">${data.duration}</span>
      <span class="film-card__genre">${data.genre}</span>
    </p>
    <img src="${data.posterSrc}" alt="" class="film-card__poster">
    
    ${hasDescription ? `<p class="film-card__description">${data.description}</p>` : ``}
    
    <button class="film-card__comments">${data.commentsCount} comments</button>
  
    ${hasControls ? `<form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
    </form>` : ``}
    
  </article>`;

  return htmlToDomNode(html);
};
