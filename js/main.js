import FrontPage from './frontPage'

new FrontPage()

const root = document.querySelector(':root')

root.style.setProperty('--bg-color', 'white')
console.log(getComputedStyle(root))
