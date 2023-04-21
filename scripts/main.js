import { FishLists } from "./fish/fishList.js";
import { tipLists } from "./tips/tipsList.js";
import { locationList } from "./location/locationList.js";
const fish = FishLists();
const tip = tipLists();
const placed = locationList();

const fishy = document.querySelector("#fishcard");
fishy.innerHTML = fish;
const tippy = document.querySelector(".cleaningTips");
tippy.innerHTML = tip;
const locoy = document.querySelector("#places");
locoy.innerHTML = placed;
