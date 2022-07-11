const popUpOpenButton = document.querySelector('.profile__info-button');
const popUpCloseButton = document.querySelector('.pop-up__clouse-button');
const popUp = document.querySelector('.pop-up');
const profileName = document.querySelector('.profile__info-name');
const profilePofession = document.querySelector('.profile__info-profession');
const formName = document.querySelector('#nameInput');
const formProfession = document.querySelector('#professionInput');
const submitButton = document.querySelector('.pop-up__input-button');
const form = document.querySelector('.pop-up__form-input');

function openForm() {
    formName.value = profileName.textContent;
    formProfession.value = profilePofession.textContent;
    popUp.classList.add('pop-up_open');
    console.log(popUp.className);
}

function closeForm() {
    popUp.classList.remove('pop-up_open');
    console.log(popUp.className);
}


function sendForm(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profilePofession.textContent = formProfession.value;
    closeForm();
}

popUpOpenButton.addEventListener('click', openForm);
popUpCloseButton.addEventListener('click', closeForm); 
form.addEventListener('submit', sendForm);







