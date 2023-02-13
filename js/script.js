let loginButton = document.querySelector('.button-enter');
let loginPopUp = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopUp)
function showPopUp(evt) {
   
    evt.preventDefault()

    loginPopUp.classList.toggle('show-popup')
};

let closePopup = document.querySelector('.closePopUp');

closePopup.addEventListener('click',close);

function close() {
    loginPopUp.style.display = 'none'
};

