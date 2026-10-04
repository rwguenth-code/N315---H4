export default function about() {
  const div = document.createElement("div");

  div.innerHTML = `
        <h1>About Page</h1>

        <p>
            This is the about page, it's got stuff about the.. about?.. I guess.
        </p>
    `;

  return div;
}
