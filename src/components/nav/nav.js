import './nav.css'
import createAnimalList from '../animals/animals'

export default function header() {
    const nav = document.querySelector('nav');

    nav.appendChild(createAnimalList());

    return nav
}