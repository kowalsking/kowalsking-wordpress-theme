export const VARIABLES = {
  bg: '--bg-color',
  accent: '--accent-color',
  text: '--text-color'
}

export const COLOR_PALETTE = {
  light: {
    [VARIABLES.bg]: '#CDDDED',
    [VARIABLES.accent]: '#969bf6',
    [VARIABLES.text]: '#4b5056',
  },
  dark: {
    [VARIABLES.bg]: '#282c35',
    [VARIABLES.accent]: '#ffc0cb',
    [VARIABLES.text]: '#e5e5e6',
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
    } = colors

    this.root.style.setProperty(this.bg, bg)
    this.root.style.setProperty(this.accent, accent)
    this.root.style.setProperty(this.text, text)
  }
}