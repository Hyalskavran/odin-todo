import Avatar from './avatar.png'
import clock from '../clock/clock';
import './footer.css'

export default function footer() {
    const footer = document.querySelector('footer');

    const timeP = document.createElement('p');
    const createdBy = document.createElement('h4');
    const btn = document.createElement('button');
    const avatar = new Image();

    createdBy.innerText = 'Project created by '
    
    avatar.src = Avatar;
    avatar.alt = 'Avatar';

    btn.appendChild(avatar);

    const textNode = document.createTextNode('@Hyalskavran');
    btn.appendChild(textNode);

    btn.addEventListener('click', () => {
        window.open('https://github.com/Hyalskavran', '_blank');
    });

    setInterval(() => {
        timeP.innerText = clock()
    }, 1000);
    
    createdBy.appendChild(btn);
    footer.appendChild(timeP);
    footer.appendChild(createdBy);

    return footer
}