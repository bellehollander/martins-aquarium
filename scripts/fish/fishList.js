import { getFish } from "../database.js";
const fishes = getFish();

export const FishLists = () => {
  const holiest = mostHolyFish();
  const theSoliders = soldierFish();
  const lameFish = nonHolyFish();

  let htmlString = `
      <article class="fishList">
        <h2 id="MartinFishTitle" class="fish-card">Martin's fish friends : </h2>
        <ul>
    `;

  for (const fish of [...holiest, ...theSoliders, ...lameFish]) {
    htmlString += `
        <li class="fish-card">
          <div class="fish__name"> ${fish.name}</div>
          <div class="fish__species"> <div class="bold"> Species:</div>  ${fish.species}</div>
          <div class="fish__length"> <div class="bold"> Length:</div> ${fish.length} inches</div>
          <div class="fish__location"> <div class="bold"> Location:</div> ${fish.location}</div>
          <div class="fish__diet"> <div class="bold"> Food:</div> ${fish.food}</div>
          <div><img class="fish__image-image--card" src="${fish.imgUrl}" /></div>
        </li>
      `;
  }

  htmlString += `
        </ul>
      </article>
    `;

  return htmlString;
};

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];

  for (const fish of fishes) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  const soldierFishs = [];
  for (const fish of fishes) {
    if (fish.length % 5 === 0) {
      soldierFishs.push(fish);
    }
  }
  // 5, 10, 15, 20, 25, etc... fish
  return soldierFishs;
};

export const nonHolyFish = () => {
  const regularFish = [];
  for (const fish of fishes) {
    if (fish.length % 3 != 0 && fish.length % 5 != 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};
