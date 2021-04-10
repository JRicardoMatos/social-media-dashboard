const circle = document.querySelector('.toggle .fas');
const topBG = document.querySelector('.topbackground');
const bottomBG = document.querySelector('.bottombackground');
const toggle = document.querySelector('.toggle');
const header1 = document.querySelector('h1');
const card = document.querySelectorAll('.card');
const subs = document.querySelectorAll('.card h1');
const smallCards = document.querySelectorAll('.lcard');
const numbers = document.querySelectorAll('.numbers h1');
const overview = document.querySelector('.over-title');

toggle.addEventListener('click', ()=>{
    circle.classList.toggle('lighttoggle');
    topBG.classList.toggle('lighttop');
    bottomBG.classList.toggle('lightbottom');
    toggle.classList.toggle('lightback');
    header1.classList.toggle('lightcolor');
    overview.classList.toggle('overblack');
})

card.forEach((card) => {
    toggle.addEventListener('click', () =>{
        card.classList.toggle('cardlight');
    })
});

subs.forEach((subs) => {
    toggle.addEventListener('click', () => {
        subs.classList.toggle('clr-subs');
    });
});

smallCards.forEach((smallCards) =>{
    toggle.addEventListener('click', ()=>{
        smallCards.classList.toggle('lcardlight');
    });
});

numbers.forEach((numbers)=>{
    toggle.addEventListener('click', ()=>{
        numbers.classList.toggle('numberslight');
    })
});

