import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n="http://api.weatherapi.com/v1",s="035c2a5d4d2d4c4fa73122932252709",o=document.querySelector(".js-search-form"),h=document.querySelector(".js-list");o.addEventListener("submit",i);function i(e){e.preventDefault();const{city:r,days:a}=e.currentTarget.elements;l(r.value,a.value).then(t=>{console.log("then",t),h.innerHTML=u(t.forecast.forecastday)}).catch(t=>{})}function l(e="",r=1){const a=new URLSearchParams({key:s,q:e,days:r,lang:"uk"});return fetch(`${n}/forecast.json?${a}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function u(e){return e.map(({date:r,day:{avgtemp_c:a,condition:{icon:t,text:c}}})=>`
    <li class="weather-card">
    <img class="weather-icon" src="${t}" alt="${c}">
    <h2 class="weather-date">${r}</h2>
    <h3 class="weather-text">${c}</h3>
    <h3 class="temperature">${a} °C</h3>
    </li>
    `).join("")}
//# sourceMappingURL=3-weather-forecast.js.map
