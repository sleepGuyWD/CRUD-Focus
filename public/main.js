const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')
let vaderPic = document.createElement("img")
vaderPic.src = '../img/vaderImg.jpg'


update.addEventListener('click', _=> {
  fetch('/quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: 'Darth Vader',
      quote: 'I find your lack of faith disturbing.'
    })
    
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    window.location.reload(true)
  })
})

deleteButton.addEventListener('click', _ => {
  fetch('quotes', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: 'Darth Vader'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    if (response === 'No Quote to delete') {
      messageDiv.textContent = 'No Darth Vader quote to delete'
    } else {
      window.location.reload()
    }
  })
})

update.addEventListener('click', addVader)

function addVader() {
  document.querySelector('#imgContainer').appendChild(vaderPic)
  document.querySelector('#imgHeader').innerText = "Darth Vader breathes"
}