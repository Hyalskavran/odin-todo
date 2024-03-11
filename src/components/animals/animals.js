const animals = [
    { name: "Lizard", imgSource: require('../../icons/animals/png/010-iguana.png') },
    { name: "Spider", imgSource: require('../../icons/animals/png/011-spider.png') },
    { name: "Turtle", imgSource: require('../../icons/animals/png/007-turtle.png') },
    { name: "Fish", imgSource: require('../../icons/animals/png/008-fish.png') },
    { name: "Snake", imgSource: require('../../icons/animals/png/006-snake.png') },
    { name: "Mantis", imgSource: require('../../icons/animals/png/005-praying-mantis.png') },
    { name: "Frog", imgSource: require('../../icons/animals/png/009-frog.png') },
    { name: "Snail", imgSource: require('../../icons/animals/png/003-snail.png') },
    { name: "Crab", imgSource: require('../../icons/animals/png/002-crab.png') },
    { name: "Pet", imgSource: require('../../icons/animals/png/004-pets.png') },
    { name: "Other", imgSource: require('../../icons/animals/png/001-habitat.png') }
];

export default function createAnimalList() {
    const ul = document.createElement('ul');

    animals.forEach(animal => {
        const li = document.createElement('li');
        const img = new Image();
        
        img.src = animal.imgSource;
        img.alt = animal.name;

        li.innerText = animal.name;
        li.appendChild(img);

        ul.appendChild(li);
    })

    return ul
};