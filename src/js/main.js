import templateFunction from '../templates/menu-card.hbs';
import menu from '../templates/menu.json';
import chageThemButton from './chage-them.js';

const menuContainer = document.querySelector('.js-menu');
menuContainer.innerHTML = templateFunction({menu});




