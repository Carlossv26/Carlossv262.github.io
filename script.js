const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2
let i = 0
let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón',
  'Peroooo si notas que hay otro botón verdad?',
  'Ya le has dado mucho a este, intenta con el otro :D',
  'Yo puedo hacer esto todo el día, nose tú >:)',
  'vamos yo sé que quiere presionar el otro :D',
  'Buenooooo',
  'El botón de al lado también sepuede clickear sabes?',
  'Sigue pensandolo',
  'Si estás a favor del racismo sigue dando click aquí :)',
  'No puede ser D:',
  'Yaaaa',
  'vamos tienes que estar segura',
  'piensaloo'

]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)
  
  buttonNo.textContent = messages[i]

  i++;
  if (i >= messages.length) {
    i = 0;
  }

  
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})