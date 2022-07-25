const h1 = document.querySelector('.dmytro')

const dima = h1.innerText.split('').map(d => {
  if (d === ' ') return document.createElement('br')
  const element = document.createElement('span')
  element.innerText = d
  element.className = 'd'
  element.style.display = 'inline-block'
  return element
});

h1.innerText = ''
dima.forEach(d => h1.append(d))

const allD = document.querySelectorAll('.d')
allD.forEach(d => {
  d.addEventListener('mouseover', () => {
    d.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    d.style.transform = `translate(${Math.random() * 15}px, ${Math.random() * 15}px)`
  })
  d.addEventListener('mouseout', () => {
    d.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
  })
})