import { getTips } from "../database.js";

export const tipLists = () => {
  const tips = getTips();

  let htmlStringTip = `
    <article class="tipLists">
      <h2 id="tipListTitle">Here are some tips on keeping your tanks clean!</h2>
      
  `;

  for (const tip of tips) {
    htmlStringTip += ` 
    <div class="tip__name">${tip.tipName}</div>
    <div class="tip__description">${tip.description}</div>
  
`;
  }
  htmlStringTip += `</article>`;
  return htmlStringTip;
};
