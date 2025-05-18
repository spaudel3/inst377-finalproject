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