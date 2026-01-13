//your JS code here. If required.
document.getElementById("submit").addEventListener("click", addBook);

function addBook(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (title === "" || author === "" || isbn === "") return;

  const tbody = document.getElementById("book-list");

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  tbody.appendChild(tr);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

document.getElementById("book-list").addEventListener("click", removeBook);

function removeBook(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
}
