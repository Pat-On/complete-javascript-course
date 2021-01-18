'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(window.pageYOffset)
/////////////////////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // positions, scrolling dimensions of section1
  // Scrolling - old way by manual calculating of values
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // console.log("??????????????????" + s1coords.top, window.pageYOffset)
  console.log(s1coords.top + window.pageYOffset)
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  })

  //scrolling - modern way of doing it. 
  // section1.scrollIntoView({ behavior: 'smooth' })

})



/////////////////////////////////////////////////////////
// Page Navigation

// Solution above is adding function to all targeted elements, so it is not effective if we are going to consider performance.
// Better is to attache the function to first parental object and to call it by ' bubbling' 
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // it is not like it! two line above are wrong.
//     const id = this.getAttribute('href');
//     const itemToGo = document.querySelector(id);
//     // other try - ok i got it! 
//     const coordinatesToNav = itemToGo.getBoundingClientRect();
//     // console.log(id) // this = place of event

//     //modern solution - very easy
//     // document.querySelector(id).scrollIntoView({ behavior: 'smooth' })


//     window.scrollTo({

//       left: coordinatesToNav.left + window.pageXOffset,
//       top: coordinatesToNav.top + window.pageYOffset,
//       behavior: 'smooth',
//     }

//     )
//   })
// })

// EVENT DELEGATION -- VERY IMPORTANT TECHNIQUE 
// 1. Add event listener to comon parent element
// 2. Determine wht element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // We always want to have it, because it is going to stop any unwanted event in this case

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id); // small test
    document.querySelector(id).scrollIntoView({
      behaviour: 'smooth'
    })
  }
})

// Tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//'adding' the event to the buttons individually - this is bad practice! 
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); // just the test

//event delegation => to parent object
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')

  // console.log(clicked) // test

  // Guard clause - it is if statement which if one condition is going to be match

  // we will return straight the function => exit
  if (!clicked) return;
  // traditional guard clause:
  // if (clicked) {
  //   clicked.classList.add('operations__tab--active')
  // }

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active')

  // Active content area
  // console.log(clicked.dataset.tab)
  tabsContent.forEach(t => t.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})

// Menu Fade animation 
const nav = document.querySelector('.nav'); // bubbling! NICE! 


//refactoring! 

// code to first solution! 
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     })
//     logo.style.opacity = opacity;
//   }
// }

// // First solution to call function - ugly one! 
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });


/// Code to second solution this === to opacity
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

// Second solution with .bind() method => new copy=(f)
// passing 'argument' into the handler function
// !IMPORTANT You can pass only one argument inside the handler function - real one - event. 
// !IMPORTANT to pass second argument we can use this key word and .bind() method wow <3 array, object etc! WOW!
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Example to keep if I need to check it later! 
// nav.addEventListener('mouseover', function (e) {
//   // We do not have to use guard closure because 
//   //there is no risk to click something else like span etc
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target // element with we are working. 
//     // this is robust method because even if we are going to change something it is going to work


//     const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // aaa he forgot to add All
//     const logo = link.closest('.nav').querySelector('img');

//     console.log(link)
//     console.log(siblings)
//     console.log(logo)

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     })
//     logo.style.opacity = 0.5;

//   }
// })


// Sticky navigation 
// scroll event he pointed that should be avoided, because it is not efficient! 
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords)

// // we do not need event inside callback function, because w operate on window element so it is global one
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY)
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })




// Sticky navigation: intersection Observer API
// this is more efficient because we are going to get call only when the condition is "out or in"
///////////////////////////////////////////////
// this API is allowing us to observer changes 
//to the way that different element intersect another element or view port?

////exercises////

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry =>
//     console.log(entry))
// };

// const obsOptions = {
//   root: null, // in case of null value we are going to observe  entire view port. 
//   threshold: 0.1, // this is in percentage, so basically when element is going to triggered 
//   // the call back function. at the specific percent. when object will intersect the target(?)
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1)

//real solution dedicated to page
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry)

  // very nice and clear solution! 
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, //viewport again! 
  threshold: 0,
  rootMargin: `-${navHeight}px`  // because - responsive design 
});

headerObserver.observe(header)

///////////////////////////////////////////////

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden') // we removing that hidden class - very nice solution.
  observer.unobserve(entry.target) // by this we are stopping observation of this object
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, //again vieport
  threshold: 0.15, // boom at 15%
})
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})

// it is possible to observe many objects by one observer! 


//////////////////////////////////////////////////////////////
// Lazy Loading images
// this is great tool - performance - slow internet - slow devices
const imgTargets = document.querySelectorAll('img[data-src]')
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry)

  if (!entry.isIntersecting) return;

  // Replace src with data=src
  entry.target.src = entry.target.dataset.src;
  // it is going to replace src with a link stored inside the data-src. Nice! 
  // !IMPORTANT
  // after the JS is going to finish loading new version of image it will trigger the load event
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // we want to hide the effect of lazy loading
})

imgTargets.forEach(img => imgObserver.observe(img));

////////////////////////////////////////// 
// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const lengthSlides = slides.length;
// console.log(slides.length)

let curSlide = 0;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// So it is going to give us 0%; 100%, etc. cool

// Next slide

// REFACTORING
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)

}
const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = lengthSlides - 1;
  } else {
    curSlide--
  }
  goToSlide(curSlide);
  activateDot(slide);
};
const nextSlide = function () {
  if (curSlide === lengthSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++
  }
  goToSlide(curSlide);
  activateDot(slide);
}

btnRight.addEventListener('click', function () {
  nextSlide();

});

btnLeft.addEventListener('click', previousSlide)

// Arrow keys functionality
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') previousSlide();
  e.key === 'ArrowRight' && nextSlide()
})

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Dots container
const dotContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

// activation the dots
const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'))

  // selecting active one - he said it is going to be complicate
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active')
}



// Again event delegation
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset; // deconstruction of object - because the same
    // exactly the same so there is no problem to do it. 

    // const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
})

////////////////////////////////////////////////////////////////
// activation function

const init = function () {
  goToSlide(0);
  createDots();

  activateDot(0);
}

init();


// Making slider and all slides visible and smaller (work station ^^)
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-900px)';
// slider.style.overflow = "visible";



// // 188 DOM Traversing
// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orange';

// //going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// console.log(h1.closest('.header'));

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// //siblings - node properties  
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // all siblings of h1 element
// console.log(h1.parentElement.children);

// // HTML collection => array => style
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// })