// src/db.ts
var movies = [
  { title: "Airplane", genre: "Comedy", stock: 7, rate: 3.5 },
  { title: "Die Hard", genre: "Action", stock: 5, rate: 2.5 },
  { title: "Get Out", genre: "Thriller", stock: 8, rate: 3.5 },
  { title: "Gone Girl", genre: "Thriller", stock: 7, rate: 4.5 },
  { title: "Fury Road", genre: "Action", stock: 10, rate: 3 },
  { title: "Home Alone ", genre: "Comedy", stock: 4, rate: 2 },
  { title: "John Wick", genre: "Action", stock: 2, rate: 3.5 },
  { title: "Se7en", genre: "Thriller", stock: 6, rate: 4 },
  { title: "The Mask", genre: "Comedy", stock: 9, rate: 3.8 }
];
function addMovie(movie) {
  movies.push(movie);
  renderAll();
}

// src/newMovie.ts
function addNewMovie() {
  const container = document.createElement("div");
  container.className = "p-6 max-w-md mx-auto bg-white rounded-lg shadow-md";
  const title = document.createElement("h2");
  title.className = "text-2xl font-bold mb-4";
  title.innerText = "Movie Form";
  container.appendChild(title);
  const form = document.createElement("form");
  function createInput(labelText, type, name) {
    const label = document.createElement("label");
    label.className = "block mb-2";
    label.innerText = labelText;
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.className = "w-full p-2 border rounded mb-4";
    form.appendChild(label);
    form.appendChild(input);
    return input;
  }
  const titleInput = createInput("Title", "text", "title");
  const genreLabel = document.createElement("label");
  genreLabel.className = "block mb-2";
  genreLabel.innerText = "Genre";
  const genreSelect = document.createElement("select");
  genreSelect.name = "genre";
  genreSelect.className = "w-full p-2 border rounded mb-4";
  ["", "Action", "Comedy", "Thriller"].forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.innerText = genre || "Select Genre";
    genreSelect.appendChild(option);
  });
  form.appendChild(genreLabel);
  form.appendChild(genreSelect);
  const stockInput = createInput("Number in Stock", "number", "stock");
  const rateInput = createInput("Rate", "number", "rate");
  const saveButton = document.createElement("button");
  saveButton.className = "w-full bg-blue-500 text-white p-2 rounded mt-2";
  saveButton.innerText = "Save";
  form.appendChild(saveButton);
  container.appendChild(form);
  document.body.innerHTML = "";
  document.body.appendChild(container);
  saveButton.addEventListener("click", (e) => {
    let movie = {
      title: titleInput.value,
      genre: genreSelect.value,
      stock: parseInt(stockInput.value),
      rate: parseFloat(rateInput.value)
    };
    addMovie(movie);
    e.preventDefault();
    console.log("title: ", titleInput.value);
    console.log("genre: ", genreSelect.value);
    console.log("rate: ", rateInput.value);
    console.log("stock: ", stockInput.value);
  });
}

// src/login-reg.ts
var navbar = document.createElement("nav");
navbar.className = "flex justify-left items-center w-full bg-gray-100 text-white p-4 shadow-md gap-4";
var h1nav = document.createElement("h1");
h1nav.className = "text-black text-2xl font-bold";
h1nav.textContent = "Vidly";
var loginLink = document.createElement("a");
loginLink.className = "text-blue-500 font-semibold hover:underline";
loginLink.textContent = "Login";
loginLink.setAttribute("href", "#");
var registerLink = document.createElement("a");
registerLink.className = "text-blue-500 font-semibold hover:underline";
registerLink.textContent = "Register";
registerLink.setAttribute("href", "#");
navbar.append(h1nav, loginLink, registerLink);
document.body.appendChild(navbar);
var login = document.createElement("div");
login.className = "flex flex-col justify-center relative left-[500px] mt-10 p-6 bg-white shadow-md rounded w-96";
var h1login = document.createElement("h1");
h1login.className = "text-2xl font-semibold text-gray-800 mb-4";
h1login.textContent = "Login Page";
var usernameLabel = document.createElement("label");
usernameLabel.className = "block text-gray-700";
usernameLabel.textContent = "Username";
var username = document.createElement("input");
username.className = "w-full p-2 mb-3 border border-gray-400 rounded";
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Enter your username");
var passwordLabel = document.createElement("label");
passwordLabel.className = "block text-gray-700";
passwordLabel.textContent = "Password";
var password = document.createElement("input");
password.className = "w-full p-2 mb-3 border border-gray-400 rounded";
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Enter your password");
var loginBtn = document.createElement("button");
loginBtn.className = "w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700";
loginBtn.textContent = "Login";
loginBtn.type = "submit";
login.append(h1login, usernameLabel, username, passwordLabel, password, loginBtn);
document.body.appendChild(login);
var register = document.createElement("div");
register.className = "flex flex-col justify-center relative left-[500px] mt-10 p-6 bg-white shadow-md rounded w-96";
register.style.display = "none";
var h1register = document.createElement("h1");
h1register.className = "text-2xl font-semibold text-gray-800 mb-4";
h1register.textContent = "Register Page";
var usernamelabel = document.createElement("label");
usernamelabel.className = "block text-gray-700";
usernamelabel.textContent = "Username";
var registerUsername = document.createElement("input");
registerUsername.className = "w-full p-2 mb-3 border border-gray-400 rounded";
registerUsername.setAttribute("type", "text");
registerUsername.setAttribute("placeholder", "Enter your username");
var passwordlabel = document.createElement("label");
passwordlabel.className = "block text-gray-700";
passwordlabel.textContent = "Password";
var registerPassword = document.createElement("input");
registerPassword.className = "w-full p-2 mb-3 border border-gray-400 rounded";
registerPassword.setAttribute("type", "password");
registerPassword.setAttribute("placeholder", "Enter your password");
var registerBtn = document.createElement("button");
registerBtn.className = "w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700";
registerBtn.textContent = "Register";
var nameLabel = document.createElement("label");
nameLabel.className = "block text-gray-700";
nameLabel.textContent = "Name";
var nameInput = document.createElement("input");
nameInput.className = "w-full p-2 mb-3 border border-gray-400 rounded";
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter your name");
register.append(h1register, usernamelabel, registerUsername, passwordlabel, registerPassword, nameLabel, nameInput, registerBtn);
document.body.appendChild(login);
document.body.appendChild(register);
registerLink?.addEventListener("click", () => {
  showRegister();
});
loginLink?.addEventListener("submit", () => {
  showLogin();
});
function showLogin() {
  login.style.display = "block";
  register.style.display = "none";
}
function showRegister() {
  login.style.display = "none";
  register.style.display = "block";
}
document.addEventListener("DOMContentLoaded", () => {
  login?.addEventListener("submit", (event) => {
    event.preventDefault();
    checkLogin();
  });
  loginBtn?.addEventListener("click", () => {
    checkLogin();
  });
  registerBtn?.addEventListener("click", () => {
    console.log("Username =", registerUsername.value);
    console.log("Password =", registerPassword.value);
    console.log("Name =", nameInput.value);
  });
});
function checkLogin() {
  const userName = username.value;
  const passWord = password.value;
  if (userName === "admin" && passWord === "root123") {
    renderAll();
  } else {
    showRegister();
    alert("Invalid username or password.");
  }
}

// src/ediitModal.ts
var editContainer = document.createElement("div");
var save = document.createElement("button");
function editMovie(movie) {
  document.body.innerHTML = "";
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Title");
  title.setAttribute("class", "border p-2 w-full mb-4");
  title.setAttribute("required", "true");
  title.value = movie.title;
  const genre = document.createElement("select");
  genre.setAttribute("class", "border p-2 w-full mb-4");
  genre.setAttribute("required", "true");
  const option1 = document.createElement("option");
  option1.setAttribute("value", movie.genre);
  option1.textContent = "Select Genre";
  genre.appendChild(option1);
  const option2 = document.createElement("option");
  option2.setAttribute("value", "Action");
  option2.textContent = "Action";
  genre.appendChild(option2);
  const option3 = document.createElement("option");
  option3.setAttribute("value", "Comedy");
  option3.textContent = "Comedy";
  genre.appendChild(option3);
  const option4 = document.createElement("option");
  option4.setAttribute("value", "Thriller");
  option4.textContent = "Thriller";
  genre.appendChild(option4);
  const stock = document.createElement("input");
  stock.setAttribute("type", "number");
  stock.setAttribute("placeholder", "Number in Stock");
  stock.setAttribute("class", "border p-2 w-full mb-4");
  stock.setAttribute("required", "true");
  stock.value = movie.stock.toString();
  const rate = document.createElement("input");
  rate.setAttribute("type", "number");
  rate.setAttribute("placeholder", "Rate");
  rate.setAttribute("class", "border p-2 w-full mb-4");
  rate.setAttribute("required", "true");
  rate.value = movie.rate.toString();
  save.textContent = "Save";
  save.setAttribute("class", "w-full bg-blue-500 text-white p-2 rounded");
  editContainer.setAttribute("class", "w-1/2 p-4 mx-auto");
  editContainer.appendChild(title);
  editContainer.appendChild(genre);
  editContainer.appendChild(stock);
  editContainer.appendChild(rate);
  editContainer.appendChild(save);
  document.body.appendChild(editContainer);
  save.addEventListener("click", () => {
    movie.title = title.value;
    movie.genre = genre.value;
    movie.stock = parseInt(stock.value);
    movie.rate = parseFloat(rate.value);
    editContainer.innerHTML = "";
    renderAll();
  });
}

// src/index.ts
var genres = ["All Genres", "Action", "Comedy", "Thriller"];
var selectedGenre = "All Genres";
var currentPage = 1;
var pageSize = 3;
function createGenreList() {
  const ul = document.createElement("ul");
  ul.className = "border rounded-lg overflow-hidden";
  genres.forEach((genre) => {
    const li = document.createElement("li");
    li.textContent = genre;
    li.className = "p-3 border-b last:border-b-0 cursor-pointer hover:bg-blue-100 " + (genre === selectedGenre ? "bg-blue-500 text-white" : "");
    li.addEventListener("click", () => {
      selectedGenre = genre;
      currentPage = 1;
      renderAll();
    });
    ul.appendChild(li);
  });
  return ul;
}
function createMovieTable(moviesData) {
  const table = document.createElement("table");
  table.className = "w-full border-collapse border";
  const thead = document.createElement("thead");
  thead.className = "bg-gray-100";
  const headerRow = document.createElement("tr");
  const headers = ["Title", "Genre", "Stock", "Rate", "Action", "Edit"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.className = "p-2 ";
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  moviesData.forEach((movie) => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    tdTitle.className = "p-2  text-blue-500 cursor-pointer ";
    tdTitle.textContent = movie.title;
    tr.appendChild(tdTitle);
    const tdGenre = document.createElement("td");
    tdGenre.className = "p-2 ";
    tdGenre.textContent = movie.genre;
    tr.appendChild(tdGenre);
    const tdStock = document.createElement("td");
    tdStock.className = "p-2 ";
    tdStock.textContent = movie.stock.toString();
    tr.appendChild(tdStock);
    const tdRate = document.createElement("td");
    tdRate.className = "p-2 ";
    tdRate.textContent = movie.rate.toString();
    tr.appendChild(tdRate);
    const tdDelete = document.createElement("td");
    tdDelete.className = "p-2  text-center";
    const delBtn = document.createElement("button");
    delBtn.className = "bg-red-500 text-white px-2 py-1 rounded";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      const index = movies.findIndex((m) => m.title === movie.title);
      if (index !== -1) {
        movies.splice(index, 1);
      }
      renderAll();
    });
    tdDelete.appendChild(delBtn);
    tr.appendChild(tdDelete);
    const tdEdit = document.createElement("td");
    tdDelete.className = "p-2  text-center";
    const edit = document.createElement("button");
    edit.className = "bg-blue-500 text-white px-2 py-1 rounded";
    edit.textContent = "Edit";
    edit.addEventListener("click", () => {
      editMovie(movie);
    });
    tdEdit.appendChild(edit);
    tr.appendChild(tdEdit);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
}
function createPagination(totalMovies) {
  const container = document.createElement("div");
  container.className = "mt-4";
  const totalPages = Math.ceil(totalMovies / pageSize);
  for (let page = 1;page <= totalPages; page++) {
    const btn = document.createElement("button");
    btn.textContent = page.toString();
    btn.className = "px-3 py-1 border mr-2 " + (page === currentPage ? "bg-blue-500 text-white" : "");
    btn.addEventListener("click", () => {
      currentPage = page;
      renderAll();
    });
    container.appendChild(btn);
  }
  return container;
}
function createLayout() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "flex gap-4 p-6";
  const leftSide = document.createElement("div");
  leftSide.className = "w-1/4";
  const rightSide = document.createElement("div");
  rightSide.className = "w-3/4";
  mainContainer.appendChild(leftSide);
  mainContainer.appendChild(rightSide);
  return mainContainer;
}
function getFilteredMovies() {
  if (selectedGenre === "All Genres") {
    return movies;
  } else {
    return movies.filter((m) => m.genre === selectedGenre);
  }
}
function getPaginatedMovies(moviesData) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return moviesData.slice(startIndex, endIndex);
}
var searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search... (Optional)";
searchInput.className = "border p-2 w-full mb-4";
searchInput.required = true;
var isSearch = false;
searchInput.addEventListener("input", () => {
  console.log("searchInput.value: ", searchInput.value);
  isSearch = true;
  const filtered = getFilteredMovies().filter((m) => m.title.toLowerCase().includes(searchInput.value.toLowerCase()));
  renderAll();
});
function renderAll() {
  document.body.innerHTML = "";
  const mainContainer = createLayout();
  document.body.appendChild(mainContainer);
  const leftSide = mainContainer.children[0];
  const genreList = createGenreList();
  leftSide.appendChild(genreList);
  const rightSide = mainContainer.children[1];
  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("flex", "justify-between", "items-center", "mb-4");
  const newMovieBtn = document.createElement("button");
  newMovieBtn.className = "mb-4 px-4 py-2 bg-blue-500 text-white rounded";
  newMovieBtn.textContent = "New Movie";
  const logOutBtn = document.createElement("button");
  logOutBtn.className = "mb-4 px-4 py-2 bg-blue-500 text-white rounded";
  logOutBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i>`;
  btnWrapper.appendChild(newMovieBtn);
  btnWrapper.appendChild(logOutBtn);
  logOutBtn.addEventListener("click", () => {
    window.location.reload();
  });
  newMovieBtn.addEventListener("click", () => {
    addNewMovie();
  });
  rightSide.appendChild(btnWrapper);
  const filtered = getFilteredMovies();
  const infoParagraph = document.createElement("p");
  infoParagraph.textContent = `Showing ${filtered.length} movies in the database.`;
  rightSide.appendChild(infoParagraph);
  rightSide.appendChild(searchInput);
  const paginatedMovies = getPaginatedMovies(filtered);
  const table = createMovieTable(paginatedMovies);
  rightSide.appendChild(table);
  const pagination = createPagination(filtered.length);
  rightSide.appendChild(pagination);
}
document.addEventListener("DOMContentLoaded", () => {
});
export {
  renderAll
};
