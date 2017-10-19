var mpw, showPass = false;

window.addEventListener("load", () => {
  $('.ui.dropdown').dropdown() 
  $('.checkbox').checkbox()

  let clipboard = new Clipboard('.btn')
  clipboard.on('success', copySuccess)

  // advanced options accordion
  $('.accordion')
    .accordion()
  ;

  document.getElementById('computeBtn').addEventListener('click', computePassword)
  document.getElementById('showPass').addEventListener('change', showHidePass)
})

let copySuccess = () => {
  // using nag as a toast
  $('.copied.nag')
    .nag('show')
  ;
}

let showHidePass = () => {
  if(document.getElementById('showPass').checked) {
    document.getElementById('password').setAttribute('type', 'text')
    document.getElementById('copyBtn').removeAttribute("disabled");
  } else {
    document.getElementById('password').setAttribute('type', 'password')
    document.getElementById('copyBtn').setAttribute('disabled', true)
  }
}

let computePassword = () => {

  let loader = document.getElementById('loader')
  loader.setAttribute('class', 'ui active inverted dimmer')

  let name = document.getElementById('name').value
  let password = document.getElementById('masterpass').value
  let website = document.getElementById('website').value

  let version = document.getElementById('version').value
  let counter = document.getElementById('counter').value
  let type = document.getElementById('type').value

  if(!name || !password || !website || !version || !counter || !type) {
    error('Please fill in all fields')
  }

  mpw = new MPW(name, password, version);
  let value = mpw.generate(website, counter, "", type)

  value.then((pass) => {
    loader.setAttribute('class', 'ui inverted dimmer');
    document.getElementById('password').value = pass
  }, (err) => {
    error(err)
  })
}

let error = (message) => {
  console.log(message)
}
