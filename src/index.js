import menuCardsTpl from './templates/menu-cards.hbs'
import menuCards from './menu.json';

console.log(menuCards);

const menuList = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardMarkup(menuCards);

console.log(menuCardsTpl(menuCards));

function createMenuCardMarkup(menuCards) {
        return menuCardsTpl(menuCards);
}

menuList.insertAdjacentHTML('beforeend', cardsMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const USER_THEME_KEY = 'my-theme';

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');

document.body.classList.add(Theme.LIGHT);

userLocalStorageCheck();

themeSwitchToggle.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
        if (evt.target.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem(USER_THEME_KEY, Theme.DARK);
} else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
                
        localStorage.setItem(USER_THEME_KEY, Theme.LIGHT);
}
}

function userLocalStorageCheck() {
        const userThemeCheck = localStorage.getItem(USER_THEME_KEY);
        if (userThemeCheck) {
                document.body.classList.add(userThemeCheck);
        }

        if (userThemeCheck === Theme.DARK) {
                themeSwitchToggle.checked = true;
        }
}
