import {htmlToDomNode} from './utils';

export default (link, caption, count = 0, active = false) => {
  const html = `<a
  href=${link}
  class="${active ? `main-navigation__item main-navigation__item--active` : `main-navigation__item`}">
  
  ${caption}
   
  ${(count > 0) ? (`<span class="main-navigation__item-count">${count}</span>`) : ``}
  </a>`;

  return htmlToDomNode(html);
};
