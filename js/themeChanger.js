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
    this.bg = VARIABLES.bg
    this.accent = VARIABLES.accent
    this.text = VARIABLES.text
    this.border = VARIABLES.border
    this.h2 = VARIABLES.h2
    this.menu = VARIABLES.menu

    const t = localStorage.getItem('theme')
    this.changeTo(t || 'dark')

    this.tc.addEventListener('click', () => {
      this.changeTo(OPPOSITES_THEME[this.tc.dataset.theme])
    })
  }

  changeTo(theme) {
    if (theme === 'light') {
      this.changeToLight()
    } else {
      this.changeToDark()
    }
  }

  changeToDark() {    
    this.setProperties(COLOR_PALETTE.dark)
    localStorage.setItem('theme', 'dark')
    this.tc.dataset.theme = 'dark'
    this.tc.innerHTML = '<i class="fas fa-sun"></i>'
  }

  changeToLight() {
    this.setProperties(COLOR_PALETTE.light)
    localStorage.setItem('theme', 'light')
    this.tc.dataset.theme = 'light'
    this.tc.innerHTML = '<i class="fas fa-moon"></i>'
  }

  setProperties(colors) {
    const { 
      [VARIABLES.bg]: bg,
      [VARIABLES.accent]: accent,
      [VARIABLES.text]: text,
      [VARIABLES.border]: border,
      [VARIABLES.h2]: h2,
      [VARIABLES.menu]: menu,
    } = colors

    this.root.style.setProperty(this.bg, bg)
    this.root.style.setProperty(this.accent, accent)
    this.root.style.setProperty(this.text, text)
    this.root.style.setProperty(this.border, border)
    this.root.style.setProperty(this.h2, h2)
    this.root.style.setProperty(this.menu, menu)
  }
}