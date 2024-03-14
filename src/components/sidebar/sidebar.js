import './sidebar.css';
import Logo from '../../logo/Logo.png'
import createNavigationList from '../navigation/navigation';

export default function sidebar() {
    const sidebar = document.querySelector('aside');
    
    // HEADER
    const header = document.createElement('header');
    const name = document.createElement('h1');
    const img = new Image();

    name.innerText = "Terraristic's\nTodo's"
    img.src = Logo;
    img.alt = 'Logo';

    header.appendChild(img);
    header.appendChild(name);
    sidebar.appendChild(header);

    // NAVIGATION
    sidebar.appendChild(createNavigationList())

    return sidebar
}