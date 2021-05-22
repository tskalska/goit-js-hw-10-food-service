const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchToggleEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

switchToggleEl.addEventListener('click', onClickChangeTheme);

window.onload = checkTheme();

function turnOnDark() {
  bodyEl.classList.remove(Theme.LIGHT);
  bodyEl.classList.add(Theme.DARK);
}

function turnOnLight() {
  bodyEl.classList.add(Theme.LIGHT);
  bodyEl.classList.remove(Theme.DARK);
}

function setThemeState(state) {
  localStorage.setItem('theme', state);
}

function getThemeState() {
  return window.localStorage.getItem('theme');
}

function onClickChangeTheme(event){
  if (switchToggleEl.checked) {
    turnOnDark();
    setThemeState(Theme.DARK);
  } else {
    turnOnLight();
    setThemeState(Theme.LIGHT);
  }
};

function checkTheme() {
  const themeColour = getThemeState();
  if (themeColour && Theme.DARK === themeColour) {
    turnOnDark();
    switchToggleEl.checked = true;
  }
};


