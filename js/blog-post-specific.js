/* For API */
const title = document.querySelector("title");
const body = document.querySelector("body");
const blogpostContainer = document.querySelector(".blogpost-container");
const blogType = document.querySelector(".nav-info span");

/* For Modal */
const modal = document.getElementById("my-modal");
const modalImg = document.getElementById("modal-image");
const closeButton = document.getElementsByClassName("close")[0];
const captionText = document.getElementById("caption");



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const apiUrl = "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/posts/" + id;


async function fetchApi(url) {
    try {
        const data = await fetch(url + `/?_embed`);
        const json = await data.json();

        const formatDate = new Date(json.date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });

        console.log(json);

        title.innerHTML = json.title.rendered;
            
            blogpostContainer.innerHTML = `<div class="content">
                                        <div class="heading">
                                            <h2>${json.title.rendered}</h2>
                                            <hr>
                                            <p class="date"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                            <p class="author"><img src="images/person.svg" alt="person-icon" class="icon">${json._embedded.author[0].name}</p></a>
                                        </div>
                                        <div class="wp-content">${json.content.rendered}</div>
                                    </div>`

            blogType.innerHTML = json._embedded['wp:term']['0']['0'].name;

            const images = document.querySelectorAll("figure img");

            images.forEach(function(image) {   
                
                image.onclick = function showModal() {
                    modal.style.display = "block";
                    modalImg.src = image.src;
                    captionText.innerHTML = image.alt;
                }

            closeButton.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target === modal) {
                modal.style.display = "none";
                }
            };   
            });

    } catch (error) {
        console.log(error);
        blogpostContainer.innerHTML = showError("Something went wrong.");
    }
};

fetchApi(apiUrl);

