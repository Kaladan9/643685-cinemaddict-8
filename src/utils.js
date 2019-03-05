export function getRandomNumber(min, max, precision = undefined) {
  if (precision) {
    return (Math.trunc((min + Math.random() * (max + (1 / precision) - min)) * precision)) / precision;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function htmlToDomNode(html) {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}
