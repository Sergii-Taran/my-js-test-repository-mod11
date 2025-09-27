import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e=document.querySelector(".todo-list"),o=new URLSearchParams({_limit:10,_page:3});console.log(o.toString());fetch(`https://jsonplaceholder.typicode.com/todos?${o}`).then(t=>{if(!t.ok)throw new Error("Oooops!");return t.json()}).then(t=>{e.insertAdjacentHTML("beforeend",c(t))}).catch(t=>{e.insertAdjacentHTML("beforeend",`
      <li>
      <p>${t}</p>
      </li>
      `)});function c(t){return t.map(({title:n,completed:r})=>`
  <li class="list-item">
  <input type="checkbox" ${r&&"checked"}/>
  <p>${n}</p>
  </li>
  `).join("")}
//# sourceMappingURL=1-test-list.js.map
