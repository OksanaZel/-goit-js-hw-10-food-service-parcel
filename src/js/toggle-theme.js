const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const USER_THEME_KEY = 'my-theme';

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');

userLocalStorageCheck();

function userLocalStorageCheck() {
    const userThemeCheck = localStorage.getItem(USER_THEME_KEY);
    
        if (userThemeCheck) {
                document.body.classList.add(userThemeCheck);
        } else {
            document.body.classList.add(Theme.LIGHT)
        }

        if (userThemeCheck === Theme.DARK) {
                themeSwitchToggle.checked = true;
        }
}

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


