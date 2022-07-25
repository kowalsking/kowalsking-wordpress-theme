import gsap from 'gsap'

export default class {
  constructor () {
    this.handleH1()
    this.disableUserSelect()
  }

  disableUserSelect () {
    const fp = document.querySelector('.first-screen')
    if (!fp) return
    document.body.classList.add('disable-select')
  }

  handleH1 () {
    this.h1 = document.querySelector('.dmytro')

    if (!this.h1) return

    this.showH1()
    this.colorizeH1()
  }

  showH1 () {
    gsap.fromTo(this.h1, {
      opacity: 0
    }, {
      delay: 1,
      opacity: 0.8,
      duration: 1.7
    })
  }

  colorizeH1 () {
    const dima = this.h1.innerText.split('').map(d => {
      if (d === ' ') return document.createElement('br')
      const element = document.createElement('span')
      element.innerText = d
      element.className = 'd'
      element.style.display = 'inline-block'
      return element
    });

    this.h1.innerText = ''
    dima.forEach(d => this.h1.append(d))

    const allD = document.querySelectorAll('.d')
    allD.forEach(d => {
      d.addEventListener('mouseover', () => {
        d.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        d.style.transform = `translate(${Math.random() * 15}px, ${Math.random() * 15}px) rotate(${Math.random() * (15 - -15 + 1) + -15}deg)`
      })
      d.addEventListener('mouseout', () => {
        d.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
      })
    })
  }
}