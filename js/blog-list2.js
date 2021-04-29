/*const url = "https://larsingeprojects.one/guitarrr/wp-json/wp/v2";*/
const body = document.querySelector("body");

const apiUrl =
    "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";

let length = 4;
let offset = 0;

const buttonPrevious = document.querySelector("#button-previous");
const buttonNext = document.querySelector("#button-next");

async function fetchApi(url) {
    try {
        const data = await fetch(
            url + `posts`
        );
        const json = await data.json();

            console.log(json);
            
            body.innerHTML = `<div>${json[0].content.rendered}</div>`


        // Validate Buttons visibility
        if (offset === 0) {
            buttonPrevious.style.display = "none";
        } else {
            buttonPrevious.style.display = "block";
        }
        if (json.length < 4) {
            buttonNext.style.display = "none";
        } else {
            buttonNext.style.display = "block";
        }


    } catch (error) {
        console.log(error);
    }
}

buttonPrevious.addEventListener("click", () => {
    if (offset >= 4) {
        offset -= 4;
    }
    fetchApi(apiUrl);
});
buttonNext.addEventListener("click", () => {
    offset += 4;
    fetchApi(apiUrl);
});

fetchApi(apiUrl);

