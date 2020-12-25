function loadItems() {
  return fetch('data/data.json')
  .then(response => response.json())
  .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item">
    <img src="imgs/${item.image}" alt="${item.type}" class="item__thumbnail"/>
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
`
}

function setEventListener(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.btnBox');

  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onClickButton(event, items));
}

function onClickButton(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null) {
    return;
  }

  const filtered = items.filter(item => item[key] == value);
  displayItems(filtered);
}

loadItems()
.then(items => {
  displayItems(items);
  createHTMLString(items);
  setEventListener(items);
})