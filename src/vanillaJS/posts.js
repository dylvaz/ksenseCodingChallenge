if (window.location.search != '') {
  let userID = window.location.search.slice(6);

  let h1 = document.createElement('h1');
  h1.innerText = `Posts for User ID #${userID}`;
  document.querySelector('.title').append(h1);
  async function generatePostTable(table, url) {
    const data = await fetch(url)
      .then((response) => response.json())
      .catch((err) => console.error(err));

    // generate rows and cells and populate them with the values of each key from each post obj
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }

    // generate Table Headers and populate them with the keys of each post obj
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
  let table = document.querySelector('#posts-table');
  generatePostTable(
    table,
    `https://jsonplaceholder.typicode.com/users/${userID}/posts`
  );
} else {
  console.log('no user selected');
}
