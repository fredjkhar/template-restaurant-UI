
/*
const nav = document.querySelector(".navbar");
const navList = document.querySelector(".navbar__list--horizontal");
const navIcon = document.querySelectorAll(".navbar__icon");


const navListOptions = {};

const navListObserver = new IntersectionObserver(function(    
    entries,
    navListObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                navIcon.forEach(icon => {
                    icon.classList.add('navbar__icon--hidden');
                });
                setTimeout(() => {  
                    navList.classList.add('navbar__list--scrolled');
                }, 200);
                
            } else {
                navList.classList.remove('navbar__list--scrolled');
                setTimeout(() => {  navIcon.forEach(icon => {
                    icon.classList.remove('navbar__icon--hidden');
                }); }, 600);
                
            }
        });
}, navListOptions);



navListObserver.observe(nav,navIcon);
*/