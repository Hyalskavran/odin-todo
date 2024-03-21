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
        const btn = document.createElement('button');
        btn.classList.add(element.name.split(' ').join('-'));
        
        img.src = element.imgSource;
        img.alt = element.name;

        btn.innerText = element.name;
        btn.appendChild(img);

        li.appendChild(btn);
        ul.appendChild(li);
    })

    return ul
};