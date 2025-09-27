import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const o="47040317-0d9018ce78b59a4267667365b",a=document.querySelector(".list"),n=new URLSearchParams({key:o,q:"formula 1"});fetch(`https://pixabay.com/api/?${n}}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{console.log("data",t),a.insertAdjacentHTML("beforeend",c(t.hits))}).catch(t=>{console.log("error",t)});function c(t){return t.map(({previewURL:r,tags:e})=>`
  <li>
  <img src="${r}" alt="${e}" width="300">
  </li>
  `).join("")}
//# sourceMappingURL=2-pixabay.js.map
