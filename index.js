import{a as u,S as g,i as y}from"./assets/vendor-Dlc6jZjm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function d(l){return u.defaults.baseURL="https://pixabay.com",u.get("/api/",{params:{key:"51453441-8ba936d16adf232cd1ca4d1fd",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}})}console.log(d("dog"));function p(l){console.log(l);const t=l.map(o=>`<li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}">
        <ul class="photo-details">
          <li>
            <p>Likes</p>
            <p>${o.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${o.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${o.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${o.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");document.querySelector("ul.gallery").innerHTML=t,new g(".gallery a",{captionsData:"alt",captionDelay:150}).refresh()}function f(){document.querySelector("ul.gallery").innerHTML=""}function m(){document.querySelector(".js-loader").classList.add("loader")}function n(){document.querySelector(".js-loader").classList.remove("loader")}const h=Object.freeze(Object.defineProperty({__proto__:null,clearGallery:f,createGallery:p,hideLoader:n,showLoader:m},Symbol.toStringTag,{value:"Module"})),s=document.querySelector(".form");console.log(h);let i="";s.addEventListener("submit",l=>{l.preventDefault(),f(),i=s.elements["search-text"].value.trim(),i!==""&&(m(),d(i).then(t=>{if(t.data.hits.length===0){y.error({backgroundColor:"#ef4040",class:"error-message",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:1.5,position:"topRight",iconUrl:"./img/x-octagon.svg"}),n(),s.elements["search-text"].value="";return}n(),p(t.data.hits),s.elements["search-text"].value=""}).catch(t=>{console.error(t)}))});
//# sourceMappingURL=index.js.map
