const url = "https://larsingeprojects.one/gamehub/wp-json/wc/v3/products";

const fullUrl = "https://noroffcors.herokuapp.com/" + url;

const options = {"headers": {
    "key": "ck_50303ce64a1724bfa857dcf781f9a6a1823fd78e",
    "secret": "cs_a155db997c4ff7921cbbdd3911cf931afc5a4068",
}};

async function blogList() {
    try {
        const response = await fetch(fullUrl, options);
        const results = await response.json();
        console.log(results);
    }
    catch(error) {
        console.log(error);
    }
}

blogList();