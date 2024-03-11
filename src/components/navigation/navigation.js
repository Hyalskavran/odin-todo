const navs = [
    { name: "Add Task", imgSource: require('../../icons/nav/png/001-add-file.png') },
    { name: "Search", imgSource: require('../../icons/nav/png/002-search.png') },
    { name: "Today", imgSource: require('../../icons/nav/png/003-forecast.png') },
    { name: "This Week", imgSource: require('../../icons/nav/png/004-week.png') },
    { name: "This Month", imgSource: require('../../icons/nav/png/005-month.png') },
    { name: "Later", imgSource: require('../../icons/nav/png/006-future.png') }
];

export default function createNavigationList() {
    const ul = document.createElement('ul');

    navs.forEach(element => {
        const li = document.createElement('li');
        const img = new Image();
        
        img.src = element.imgSource;
        img.alt = element.name;

        li.innerText = element.name;
        li.appendChild(img);

        ul.appendChild(li);
    })

    return ul
};