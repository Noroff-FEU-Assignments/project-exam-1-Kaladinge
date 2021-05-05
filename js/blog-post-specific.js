const title = document.querySelector("title");
const body = document.querySelector("body");
const slideShow = document.querySelector(".slideshow-container");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const apiUrl = "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/posts/" + id;


async function fetchApi(url) {
    try {
        const data = await fetch(url + `/?_embed`);
        const json = await data.json();

        console.log(json);

        title.innerHTML = json.title.rendered;
            
            slideShow.innerHTML = `<div class="content">
                                        <div class="heading">
                                            <h2>${json.title.rendered}</h2>
                                            <hr>
                                            <p class="inline date">${json.date}</p>
                                            <p class="inline author">${json._embedded.author[0].name}</p>
                                        </div>
                                        <div class="wp-content">${json.content.rendered}</div>
                                    </div>`
                                    
            const picture = document.querySelector(".picture");
            console.log(picture);

            console.log(json.content.rendered);

            const images = document.querySelectorAll("figure .size-medium");
            console.log(images);

            images.forEach(function(image) {   
                image.onclick = function showModal() {
                   console.log(image);
                    modal.style.display = "block";
                    modalImg.src = image.src;
                }
                
                
            });

        //images[0].addEventListener = ("click", function frog() {console.log("frog");})

             

            


    } catch (error) {
        console.log(error);
    }
};

fetchApi(apiUrl);

const images = document.querySelectorAll("img");
            console.log(images);

