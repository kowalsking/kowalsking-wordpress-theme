import prism from '../libs/prismjs/prism';


console.log('prism', prism)
import FrontPage from './frontPage'

new FrontPage()

const root = document.querySelector(':root')
const button = document.querySelector('.theme-changer')

button.addEventListener('click', () => {
  root.style.setProperty('--bg-color', '#CDDDED')
  root.style.setProperty('--accent-color', '#D3C3F7')
  root.style.setProperty('--text-color', '#23262e')
})

console.log(getComputedStyle(root))
