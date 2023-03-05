// "use strict"

// const loadVideoBlock = document.querySelector('._load-map');
// const windowHeight = document.documentElement.clientHeight;

// function lazyScroll() {
//   if(!loadVideoBlock.classList.contains('_active')) {
//     getVideo();
//   }
// }

// function getVideo() {
//   const pageYOffset = window.pageYOffset;
//   const loadVideoBlockPosition = loadVideoBlock.getBoundingClientRect().top + pageYOffset;
//   if(pageYOffset > loadVideoBlockPosition - windowHeight) {
//     const loadVideoUrl = loadVideoBlock.dataset.map;
//     if(loadVideoUrl) {
//       loadVideoBlock.insertAdjacentHTML(
//         "beforeend",
//         `<iframe id="video" src="https://www.youtube.com/embed/AO8RWJmhpCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>`
//       );
//       loadVideoBlock.classList.add('_loaded');
//     }
//   }
// }
// lazyScroll();