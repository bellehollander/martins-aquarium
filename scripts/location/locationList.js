import { getLocation } from "../database.js";

export const locationList = () => {
  const location = getLocation();

  let htmlString3 = `
    <article class="locationLists">
      <h1 id="locationTitle">Martin's harvesting locations</h1>
      <ul>
  `;

  for (const loco of location) {
    htmlString3 += `
        <li class="locationCard">
         <div class="location__name">${loco}</div>
          </li>
      `;
  }
  htmlString3 += `</article>`;
  return htmlString3;
};
