import { showToast } from "../src/utility.js";

export default function home() {
  const div = document.createElement("div");

  div.innerHTML = `
        <h1>Home Page</h1>
        <img src="./images/thumbsup.jpg" alt="Thumbs Up yea" />

        <br><br>

        <button id="loadBtn">
            Load Data
        </button>
    `;

  setTimeout(() => {
    const btn = div.querySelector("#loadBtn");

    btn.addEventListener("click", () => {
      const loadingToast = showToast("Loading data...", "loading");

      setTimeout(() => {
        loadingToast.remove();

        showToast("Data loaded successfully!", "success");
      }, 2000);
    });
  }, 0);

  return div;
}
