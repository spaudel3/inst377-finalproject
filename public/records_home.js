const host = window.location.origin;
console.log(host);

async function createUser() {
    await fetch(`${host}/user`, {
        method: 'POST',
        body: JSON.stringify({
            firstName: `${document.getElementById("firstName").value}`,
            lastName: `${document.getElementById("lastName").value}`,
            favMonster: `${document.getElementById("favMonster").value}`
        }),
        headers: {
            'content-type': 'application/json'
        },
        
    }).then((result) => {
        result.json();
        window.location.reload();
    });
}

async function getFavorites() {
    // const popularMon = document.getElementById("popMonster");
    await fetch(`${host}/users`)
    .then((result) => result.json())
    .then((resultJson) => {
        console.log(resultJson);
        console.log(resultJson[0])
        const popularMon = [];
        for (const i of resultJson) {
            popularMon.push(i.user_favorite_hero);
        }
        console.log(popularMon);
        const highestVote = mostVoted(popularMon);
        console.log(highestVote);
        document.getElementById("popMonster").innerHTML = highestVote;
    })
}

function mostVoted(list) {
    const count = {};
    var maxCount = 0;
    var mostFrequent = "";

    for (const i of list) {
        console.log(i);
        count[i] = (count[i] || 0) + 1;
        // count[i] = count[i] + 1;
        console.log(count[i]);
        console.log(maxCount);
        if (count[i] > maxCount) {
            maxCount = count[i];
            mostFrequent = i;
        }
    }
    console.log(mostFrequent);
    return mostFrequent;
}

// need function that takes the user's response and returns most voted monster, but idk if that would be here or in index.js

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