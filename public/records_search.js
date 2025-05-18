// i use this variable for both functions, so i called it outside
const dropDown = document.getElementById('itemType');

function loadMHAPI() {
    const inputName = document.getElementById('searchInput').value;
    
    if (dropDown.selectedIndex == 0) {
        return fetch(`https://mhw-db.com/monsters?q={"name":"${inputName}"}`).then((result) =>
        result.json()
    );
    } else if (dropDown.selectedIndex == 1) {
        return fetch(`https://mhw-db.com/weapons?q={"name":"${inputName}"}`).then((result) =>
        result.json()
    );
    }
    
}

async function searchRequest() {
    const infoDiv = document.getElementById("main-container");
    const itemList = await loadMHAPI();
    infoDiv.style.visibility = 'visible';
    console.log(itemList);
    console.log(itemList[0]);
    if (itemList.length == 0) {
        alert("Not a valid search! Either the item doesn't exist or the spelling is incorrect!");
        window.location.reload();
    }
    if (dropDown.selectedIndex == 0) {
        infoDiv.style.visibility = 'visible';
        infoDiv.innerHTML = '';
        const name = document.createElement("h1");
        name.textContent = `${itemList[0].name}`;
        console.log(name);
        const desc = document.createElement("h2");
        desc.textContent = `${itemList[0].description}`;
        const type = document.createElement("p");
        type.textContent = `Type: ${itemList[0].type}`;
        const species = document.createElement("p");
        species.textContent = `Species: ${itemList[0].species}`;
        const element = document.createElement("p");
        element.textContent = `Element(s): ${itemList[0].elements}`;
        const ailments = document.createElement("p");
        ailments.textContent = `Ailment(s): `;
        console.log(itemList[0].ailments[1]);
        itemList[0].ailments.forEach((item) => {
            ailments.append(`${item.name}, `);
            console.log(ailments);
            typeof(ailments);
        });
        const locations = document.createElement("p");
        locations.textContent = `Can be found in: `;
        itemList[0].locations.forEach((item) => {
            locations.append(`${item.name}, `);
            console.log(locations);
        });
        const resistances = document.createElement("p");
        resistances.textContent = `Resistance(s): `;
        itemList[0].resistances.forEach((item) => {
            resistances.append(`${item.element}, `);
            console.log(resistances);
        });
        const weaknesses = document.createElement("p");
        weaknesses.textContent = `Weaknesses: `;
        itemList[0].weaknesses.forEach((item) => {
            weaknesses.append(`${item.element}, `);
            console.log(weaknesses);
        })
        infoDiv.appendChild(name);
        infoDiv.appendChild(desc);
        infoDiv.appendChild(type);
        infoDiv.appendChild(species);
        infoDiv.appendChild(element);
        infoDiv.appendChild(ailments);
        infoDiv.appendChild(locations);
        infoDiv.appendChild(resistances);
        infoDiv.appendChild(weaknesses);
    } else if (dropDown.selectedIndex == 1) {
        infoDiv.style.visibility = 'visible';
        infoDiv.innerHTML = '';
        const name = document.createElement("h1");
        name.textContent = `${itemList[0].name}`;
        const image = document.createElement("img");
        image.src = itemList[0].assets.image;
        console.log(image);
        const type = document.createElement("h2");
        type.textContent = `Type: ${itemList[0].type}`;
        const dtype = document.createElement("h2");
        dtype.textContent = `Damage Type: ${itemList[0].damageType}`;
        const displayAttack = document.createElement("h2");
        displayAttack.textContent = `Attack (display): ${itemList[0].attack.display}`;
        const rawAttack = document.createElement("h2");
        rawAttack.textContent = `Attack (raw): ${itemList[0].attack.raw}`;
        infoDiv.appendChild(name);
        infoDiv.appendChild(image);
        infoDiv.appendChild(type);
        infoDiv.appendChild(dtype);
        infoDiv.appendChild(displayAttack);
        infoDiv.appendChild(rawAttack);
    }
}