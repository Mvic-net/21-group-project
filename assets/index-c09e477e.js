(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),s=document.querySelector("body"),n=document.querySelectorAll(".mobile-menu-link"),e=document.querySelector(".mobile-menu-icon-link");r.addEventListener("click",t),e.addEventListener("click",t);for(let c=0;c<n.length;c++)n[c].addEventListener("click",t);function t(){const c=r.getAttribute("aria-expanded")==="true"||!1;r.classList.toggle("is-open"),r.setAttribute("aria-expanded",!c),o.classList.toggle("is-open"),s.classList.toggle("overflow-hidden")}})();document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),s=document.querySelectorAll(".js-modal-close");r.forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+t+'"]');c.classList.add("active"),o.classList.add("active")})}),s.forEach(function(n){n.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(n){var e=n.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const i=document.querySelector(".go-top");window.addEventListener("scroll",d);i.addEventListener("click",l);function d(){const r=window.pageYOffset,o=document.documentElement.clientHeight;r>o?i.classList.add("go-top--show"):i.classList.remove("go-top--show")}function l(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(l,0))}