const url = "https://larsingeprojects.one/guitarrr/wp-json/wc/v3/products?consumer_key=ck_1ed6953e7f13254a2789044c94bcbfb3c487803b&consumer_secret=cs_a9ec019056d7323f7e06dacbcd741cb8962864cf";

const fadeOne = document.querySelector(".fade1");
const fadeTwo = document.querySelector(".fade2");
const fadeThree = document.querySelector(".fade3");
const slideShowContainer = document.querySelector(".slideshow-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

 /*
const fullUrl = "https://noroffcors.herokuapp.com/" + url;

const options = {"headers": {
    "consumer_key": "ck_1ed6953e7f13254a2789044c94bcbfb3c487803b",
    "consumer_secret": "cs_a9ec019056d7323f7e06dacbcd741cb8962864cf",
}};*/

async function blogList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < 3; i++) {

        fadeOne.innerHTML += `<div class="blocks">
                                <img src="${results[i].images[0].src}" class="image">
                                <div class="numbertext">${i + 1} / 9</div>
                                <h2 class="left">${results[i].name}</h2>
                                <p class="left">${results[i].categories[0].name}</p>
                                <p class="right">${results[i].attributes[0].options}</p>
                                <p class="right">${results[i].attributes[1].options}</p>
                                <p class="left">${results[i].description}</p>
                            </div>
                            `

        fadeTwo.innerHTML += `<div class="blocks">
                                <img src="${results[i + 3].images[0].src}" class="image">
                                <div class="numbertext">${i + 4} / 9</div>
                                <h2 class="left">${results[i + 3].name}</h2>
                                <p class="left">${results[i + 3].categories[0].name}</p>
                                <p class="right">${results[i + 3].attributes[0].options}</p>
                                <p class="right">${results[i + 3].attributes[1].name}</p>
                                <p class="left">${results[i + 3].description}</p>
                            </div>
                            `

        fadeThree.innerHTML += `<div class="blocks">
                                <img src="${results[i + 6].images[0].src}" class="image">
                                <div class="numbertext">${i + 7} / 9</div>
                                <h2 class="left">${results[i + 6].name}</h2>
                                <p class="left">${results[i + 6].categories[0].name}</p>
                                <p class="right">${results[i + 3].attributes[0].options}</p>
                                <p class="right">${results[i + 3].attributes[1].options}</p>
                                <p class="left">${results[i + 6].description}</p>
                            </div>
                            `

                            

        
        /*slideShowContainer.innerHTML += `
                                        <div>
                                            <img src="images/guitar-roger.jpg" class="image">
                                            <div class="numbertext">${i} / 9</div>
                                        </div>
                                        <div>
                                            <img src="images/guitar-roger.jpg" class="image">
                                            <div class="numbertext">${i + 1} / 9</div>
                                        </div>
                                        <div>
                                            <img src="images/guitar-roger.jpg" class="image">
                                            <div class="numbertext">${i + 2} / 9</div>
                                        </div>
                                        `


                                        let numberText = document.querySelectorAll(".numbertext");
                                        console.log(numberText)*/

    }



}
    catch(error) {
        console.log(error);
    }
}


blogList();

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



