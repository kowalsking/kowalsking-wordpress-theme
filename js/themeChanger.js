export const VARIABLES = {
  bg: '--bg-color',
  accent: '--accent-color',
  text: '--text-color',
  border: '--border-color',
  h2: '--h2-header-color',
  menu: '--menu-color',
}

export const COLOR_PALETTE = {
  light: {
    [VARIABLES.bg]: '#CDDDED',
    [VARIABLES.accent]: '#969bf6',
    [VARIABLES.text]: '#4b5056',
    [VARIABLES.border]: 'white',
    [VARIABLES.h2]: '#31363b',
    [VARIABLES.menu]: 'white',
  },
  dark: {
    [VARIABLES.bg]: '#282c35',
    [VARIABLES.accent]: '#ffc0cb',
    [VARIABLES.text]: '#e5e5e6',
    [VARIABLES.border]: '#4b5056',
    [VARIABLES.h2]: '#f1f3f5',
    [VARIABLES.menu]: 'white',
  }
}

const OPPOSITES_THEME = {
  dark: 'light',
  light: 'dark'
}

export default class {
  constructor() {
    this.root = document.querySelector(':root')
    this.tc = document.querySelector('.theme-changer')
    const t = localStorage.getItem('theme')
    this.changeTo(t || 'dark')

    this.tc.addEventListener('click', () => {
      this.changeTo(OPPOSITES_THEME[this.tc.dataset.theme])
    })
  }

  changeTo(theme) {
    this.setProperties(theme)
    localStorage.setItem('theme', theme)
    this.tc.dataset.theme = theme
    this.tc.innerHTML = `<i class="fas fa-${theme === 'dark' ? 'sun' : 'moon'}"></i>`
  }

  setProperties(theme) {
    Object.keys(VARIABLES).forEach(v => {
      this.root.style.setProperty(VARIABLES[v], COLOR_PALETTE[theme][VARIABLES[v]])
    })
  }
}