const animals = [
    { name: "LIZARD", imgSource: require('../../icons/animals/png/010-iguana.png') },
    { name: "SPIDER", imgSource: require('../../icons/animals/png/011-spider.png') },
    { name: "TURTLE", imgSource: require('../../icons/animals/png/007-turtle.png') },
    { name: "FISH", imgSource: require('../../icons/animals/png/008-fish.png') },
    { name: "SNAKE", imgSource: require('../../icons/animals/png/006-snake.png') },
    { name: "MANTIS", imgSource: require('../../icons/animals/png/005-praying-mantis.png') },
    { name: "FROG", imgSource: require('../../icons/animals/png/009-frog.png') },
    { name: "SNAIL", imgSource: require('../../icons/animals/png/003-snail.png') },
    { name: "CRAB", imgSource: require('../../icons/animals/png/002-crab.png') },
    { name: "PET", imgSource: require('../../icons/animals/png/004-pets.png') },
    { name: "OTHER", imgSource: require('../../icons/animals/png/001-habitat.png') }
];

function checkAnimalExists(animalName) {
    return animals.some(animal => animal.name === animalName);
}

function createAnimalList() {
    const ul = document.createElement('ul');

    animals.forEach(animal => {
        const li = document.createElement('li');
        const img = new Image();
        const btn = document.createElement('button');
        btn.classList.add(`${animal.name}-btn`);
        
        img.src = animal.imgSource;
        img.alt = animal.name;

        btn.innerText = animal.name;
        btn.appendChild(img);

        li.appendChild(btn);
        ul.appendChild(li);
    })

    return ul
};

export {
    animals,
    checkAnimalExists,
    createAnimalList
}