const popUpOpenButton = document.querySelector('.profile__info__information__button');
const popUpCloseButton = document.querySelector('.container__clouse-button');
const popUp = document.querySelector('.pop-up');
const profileName = document.querySelector('.profile__info__information__name');
const profilePofession = document.querySelector('.profile__info__information__profession');
const formName = document.querySelector('#nameInput');
const formProfession = document.querySelector('#professionInput');
const submitButton = document.querySelector('.input__button');
const form = document.querySelector('.form__input');

function openForm() {
    popUp.classList.add('pop-up-open');
    console.log(popUp.className);
}

function closeForm() {
    popUp.classList.remove('pop-up-open');
    console.log(popUp.className);
    formName.value = profileName.textContent;
    formProfession.value = profilePofession.textContent;
}

function submitForm() {
    popUp.classList.remove('pop-up-open');
    console.log(popUp.className);
}

function sendForm(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profilePofession.textContent = formProfession.value;
    submitForm();
}

popUpOpenButton.addEventListener('click', openForm);
popUpCloseButton.addEventListener('click', closeForm); 

formName.value = profileName.textContent;
formProfession.value = profilePofession.textContent;
form.addEventListener('submit', sendForm);





