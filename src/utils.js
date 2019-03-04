export function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function htmlToDomNode(html) {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}
