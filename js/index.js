const fadeOne = document.querySelector(".fade1");
const fadeTwo = document.querySelector(".fade2");
const fadeThree = document.querySelector(".fade3");
const slideShowContainer = document.querySelector(".slideshow-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


const apiUrl =
    "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";



const buttonPrevious = document.querySelector("#button-previous");
const buttonNext = document.querySelector("#button-next");



async function blogList(url) {
    try {
        const response = await fetch(url + `posts?_embed`);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < 3; i++) {

        fadeOne.innerHTML += `<div class="blocks">
                                <img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 1} / 9</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right">${results[i].date}</p>
                                <p class="right">${results[i]._embedded.author[0].name}</p>
                                <p class="left">${results[i].excerpt.rendered}</p>
                                </div>`
                            

        fadeTwo.innerHTML += `<div class="blocks">
                                <img src="${results[i + 3]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 4} / 9</div>
                                <h2 class="left">${results[i + 3].title.rendered}</h2>
                                <p class="left">${results[i + 3]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right">${results[i + 3].date}</p>
                                <p class="right">${results[i + 3]._embedded.author[0].name}</p>
                                <p class="left">${results[i + 3].excerpt.rendered}</p>
                                </div>`
                            

        fadeThree.innerHTML += `<div class="blocks">
                                <img src="${results[i + 6]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 7} / 9</div>
                                <h2 class="left">${results[i + 6].title.rendered}</h2>
                                <p class="left">${results[i + 6]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right">${results[i + 6].date}</p>
                                <p class="right">${results[i + 6]._embedded.author[0].name}</p>
                                <p class="left">${results[i + 6].excerpt.rendered}</p>
                                </div>`

    }
}
    catch(error) {
        console.log(error);
    }
}

blogList(apiUrl);

console.log(slideShowContainer);

var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides");

 console.log(slides);
 console.log(slides.length);

 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 console.log(n);
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

console.log(slides[slideIndex-1]);
slides[slideIndex-1].style.display = "block";

}

/* prev/next functionality */

prev.addEventListener("click", function() {showSlides(slideIndex -= 1);});
next.addEventListener("click", function() {showSlides(slideIndex += 1);});



