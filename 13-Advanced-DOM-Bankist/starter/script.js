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


/////////////////////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // positions, scrolling dimensions of section1
  // Scrolling - old way by manual calculating of values
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // console.log(s1coords.top, window.pageYOffset)
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



// Lectures 
// 189 Building a Tabbed Component





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