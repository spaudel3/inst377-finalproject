// const api_key = "http://comicvine.gamespot.com/api/character/4005-24694/?api_key=7c2192ec41cd4b66a7bd80c9915a0ffed53d33cb"
// using superhero api instead now, api key is: c5c0b8730b9f3fb24591704b08e84b84

// function sliderImage() {
//     const div = document.getElementById("imageSlider");
//     const id_1 = getRandom();
//     const id_2 = getRandom();
//     const id_3 = getRandom();
//     console.log(id_1, id_2, id_3);
//     const images = {one:"", two:""}
//     for (const i in images) {
//         console.log(i);
//         console.log(i.value);
//         let image = document.createElement("img");
//         image.src = i.value;
//         image.width = 612;
//         image.height = 612;
//         div.appendChild(image);
//     }
    

    // const api_url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/c5c0b8730b9f3fb24591704b08e84b84/${id_1}`;
    // await fetch(api_url)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     let image = document.createElement("img");
    //     image.src = data.image;
    //     image.width = 612;
    //     image.height = 612;
    //     div.appendChild(image);

        // data.results.forEach((item) => {
        //     let image = document.createElement("img");
        //     image.src = item.image;
        //     image.width = 612;
        //     image.height = 612;
        //     div.appendChild(image);
        // })
    // }

// async function getAPI() {
//     // const api_url = `https://superheroapi.com/api/c5c0b8730b9f3fb24591704b08e84b84/search`
//     // gonna use superhero api for search functionality and most popular, comic vine for slider
    

// }

// function getRandom() {
//     min = 1;
//     max = 731;
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }