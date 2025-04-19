import { movies } from "./db";
import { addNewMovie } from "./newMovie";
import type { Movie } from "./types";
import "./login-reg";
import { showLogin } from "./login-reg";
import { editMovie } from "./ediitModal";

const genres: string[] = ["All Genres", "Action", "Comedy", "Thriller"];

let selectedGenre: string = "All Genres";

let currentPage: number = 1;

const pageSize: number = 3;

function createGenreList(): HTMLElement {
  const ul = document.createElement("ul");
  ul.className = "border rounded-lg overflow-hidden";

  genres.forEach((genre) => {
    const li = document.createElement("li");
    li.textContent = genre;
    li.className =
      "p-3 border-b last:border-b-0 cursor-pointer hover:bg-blue-100 " +
      (genre === selectedGenre ? "bg-blue-500 text-white" : "");

    li.addEventListener("click", () => {
      selectedGenre = genre;
      currentPage = 1;
      renderAll();
    });

    ul.appendChild(li);
  });

  return ul;
}

function createMovieTable(moviesData: Movie[]): HTMLTableElement {
  const table = document.createElement("table");
  table.className = "w-full border-collapse border";

  // THEAD
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

      // renderAll();
    });
    tdEdit.appendChild(edit);
    tr.appendChild(tdEdit);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
}

function createPagination(totalMovies: number): HTMLElement {
  const container = document.createElement("div");
  container.className = "mt-4";

  const totalPages = Math.ceil(totalMovies / pageSize);

  for (let page = 1; page <= totalPages; page++) {
    const btn = document.createElement("button");
    btn.textContent = page.toString();
    btn.className =
      "px-3 py-1 border mr-2 " +
      (page === currentPage ? "bg-blue-500 text-white" : "");

    btn.addEventListener("click", () => {
      currentPage = page;
      renderAll();
    });

    container.appendChild(btn);
  }

  return container;
}

function createLayout(): HTMLDivElement {
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

function getFilteredMovies(): Movie[] {
  if (selectedGenre === "All Genres") {
    return movies;
  } else {
    return movies.filter((m) => m.genre === selectedGenre);
  }
}

function getPaginatedMovies(moviesData: Movie[]): Movie[] {
  const startIndex = (currentPage - 1) * pageSize; // 0-based
  const endIndex = startIndex + pageSize;
  return moviesData.slice(startIndex, endIndex);
}

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search... (Optional)";
searchInput.className = "border p-2 w-full mb-4";
searchInput.required = true;
let isSearch = false;

searchInput.addEventListener("input", () => {
  console.log("searchInput.value: ", searchInput.value);
  isSearch = true;

  const filtered = getFilteredMovies().filter((m) =>
    m.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  renderAll();

  // renderAll();
});

export function renderAll(): void {

  document.body.innerHTML = "";
  // isSearch ? searchInput.focus : null;

  const mainContainer = createLayout();
  document.body.appendChild(mainContainer);

  const leftSide = mainContainer.children[0] as HTMLElement;
  const genreList = createGenreList();
  leftSide.appendChild(genreList);

  const rightSide = mainContainer.children[1] as HTMLElement;

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

document.addEventListener("DOMContentLoaded", () => {});
