async function generateTable(table, url) {
  const data = await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  // generate rows and cells and populate them with the values of each key from each user obj
  for (let element of data) {
    let row = table.insertRow();
    row.addEventListener('click', () => {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('user', element['id']);
      window.location.search = urlParams;
    });
    for (key in element) {
      let cell = row.insertCell();

      let text;

      if (key == 'company') {
        text = document.createTextNode(element[key]['name']);
      } else if (key == 'address') {
        let address =
          element[key]['street'] +
          ', ' +
          element[key]['city'] +
          ' ' +
          element[key]['zipcode'];
        text = document.createTextNode(address);
      } else {
        text = document.createTextNode(element[key]);
      }

      cell.appendChild(text);
    }
  }

  // generate Table Headers and populate them with the keys of each user obj
  let thead = table.createTHead();
  let row = thead.insertRow();
  let headers = Object.keys(data[0]);
  for (let key of headers) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
let table = document.querySelector('table');
generateTable(table, 'https://jsonplaceholder.typicode.com/users');
