const fadeOne = document.querySelector(".fade1");
const fadeTwo = document.querySelector(".fade2");
const fadeThree = document.querySelector(".fade3");
const fadeFour = document.querySelector(".fade4");
const slideShowContainer = document.querySelector(".slideshow-container");
const mobileContainer = document.querySelector(".slideshow-mobile-container");
const mobileSlides = document.querySelectorAll(".mobileSlides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevMobile = document.querySelector(".prev-mobile");
const nextMobile = document.querySelector(".next-mobile");
const slides = document.querySelectorAll("mySlides");

var dots = document.querySelectorAll(".dot-container .dot");
var mobileDots = document.querySelectorAll(".dot-container-mobile .dot");

const apiUrl =
    "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";

async function blogList(url) {
    try {
        const response = await fetch(url + `posts?per_page=12&_embed`);
        const results = await response.json();
        console.log(results);

        fadeOne.innerHTML = "";

        for(let i = 0; i < 3; i++) {

            const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });

        fadeOne.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 1} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left category">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i]._embedded.author[0].name}</p></a>
                                </div>`
                            

        fadeTwo.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i + 3]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 4} / 12</div>
                                <h2 class="left">${results[i + 3].title.rendered}</h2>
                                <p class="left category">${results[i + 3]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i + 3]._embedded.author[0].name}</p></a>
                                </div>`
                            

        fadeThree.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i + 6]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 7} / 12</div>
                                <h2 class="left">${results[i + 6].title.rendered}</h2>
                                <p class="left category">${results[i + 6]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i + 6]._embedded.author[0].name}</p></a>
                                </div>`

        fadeFour.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i + 9]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 10} / 12</div>
                                <h2 class="left">${results[i + 9].title.rendered}</h2>
                                <p class="left category">${results[i + 9]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i + 9]._embedded.author[0].name}</p></a>
                                </div>`

        

    }

        for(let i = 0; i < 12; i++) {

            const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });
                mobileSlides[i].innerHTML += `<div class="blocks blocks-mobile">
                                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                                <div class="numbertext">${i + 1} / 12</div>
                                                <h2 class="left">${results[i].title.rendered}</h2>
                                                <p class="left category">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i]._embedded.author[0].name}</p></a>
                                                </div>
                                                    `
            
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

/*function currentSlide(n) {
  showSlides(slideIndex = n);
}*/


function showSlides(n) {
    
    var i;
    var slides = document.querySelectorAll(".mySlides");
    
    
    var slideLength = slides.length;
    var dotLength = dots.length;

    console.log(slideLength);

 console.log(slides);
 console.log(slideLength);

 if (n > slideLength) {slideIndex = 1}
 if (n < 1) {slideIndex = slideLength}
 console.log(n);
for (i = 0; i < slideLength; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dotLength; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
}

console.log(slides[slideIndex-1]);
dots[slideIndex-1].className += " active-dot";
slides[slideIndex-1].style.display = "block";
}

dots.forEach(function(dot, number) {   
                dot.onclick = function() {showSlides(slideIndex = number + 1);}
                  });

/* mobile function */

var slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function showSlidesMobile(m) {

    var lengthy = 12;
    var dotLength = mobileDots.length;

    if (m > lengthy) {slideIndexMobile = 1}
    if (m < 1) {slideIndexMobile = lengthy}
    console.log(m);
 
    for (i = 0; i < lengthy; i++) {
    mobileSlides[i].style.display = "none";
}

for (i = 0; i < dotLength; i++) {
    mobileDots[i].className = mobileDots[i].className.replace(" active-dot", "");
}

    mobileDots[slideIndexMobile-1].className += " active-dot";
    mobileSlides[slideIndexMobile-1].style.display = "block";
}

mobileDots.forEach(function(dot, number) {   
                dot.onclick = function() {showSlidesMobile(slideIndexMobile = number + 1);}
                  });


/* prev/next functionality */

prev.addEventListener("click", function() {showSlides(slideIndex -= 1);});
next.addEventListener("click", function() {showSlides(slideIndex += 1);});



