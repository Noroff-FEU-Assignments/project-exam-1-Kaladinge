const url = "https://larsingeprojects.one/guitarrr/wp-json/wc/v3/products?consumer_key=ck_1ed6953e7f13254a2789044c94bcbfb3c487803b&consumer_secret=cs_a9ec019056d7323f7e06dacbcd741cb8962864cf";

const fadeOne = document.querySelector(".fade1");
const fadeTwo = document.querySelector(".fade2");
const fadeThree = document.querySelector(".fade3");
const slideShowContainer = document.querySelector(".slideshow-container");
const slides = document.querySelectorAll(".mySlides");


 console.log(slides);
 console.log(slides.length);

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

        fadeOne.innerHTML += `<div>
                                <img src="images/guitar-roger.jpg" class="image">
                                <div class="numbertext">${i} / 9</div>
                            </div>
                            `

        fadeTwo.innerHTML += `<div>
                                <img src="images/guitar-roger.jpg" class="image">
                                <div class="numbertext">${i + 3} / 9</div>
                            </div>
                            `

        fadeThree.innerHTML += `<div>
                                <img src="images/guitar-roger.jpg" class="image">
                                <div class="numbertext">${i + 6} / 9</div>
                            </div>
                            `

console.log(slides[i]);
                            

        
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
