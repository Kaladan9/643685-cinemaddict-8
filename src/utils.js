export function getRandomNumber(min, max, precision = undefined) {
  if (precision) {
    return (Math.trunc((min + Math.random() * (max + (1 / precision) - min)) * precision)) / precision;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function htmlToDomNode(html) {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = html;
  return newElement.firstChild;
}
