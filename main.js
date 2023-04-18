// Window scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroled', window.scrollY > 0);
})


// CONTACT BUTTONS
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }

});
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         599: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//         },
//         1023: {
//             slidesPerView: 3,
//             spaceBetween: 60,
//         }
//     }
// });

// mobile toggle btn
const nav = document.querySelector(' .nav_links');
const openNavBtn = document.querySelector('#navToggleOpen');
const closeNavBtn = document.querySelector('#navToggleClose');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click', closeNav);


if (document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink =>{
        navLink.addEventListener('click', closeNav);
    });
};



// FOR GALLERY PAGE 

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
};

function closeFullImg(){
    fullImgBox.style.display = "none";
}


