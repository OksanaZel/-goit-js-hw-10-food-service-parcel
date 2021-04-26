import menuCardsTpl from '../templates/menu-cards.hbs';
import menuCards from '../menu.json';

const menuListRefs = document.querySelector('.js-menu');
const cardsMarkup = menuCardsTpl(menuCards);

menuListRefs.insertAdjacentHTML('beforeend', cardsMarkup);