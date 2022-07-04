const popUpOpenButton = document.querySelector('.info__button');
const popUpCloseButton = document.querySelector('.container__clouse-button');
const popUp = document.querySelector('.pop-up');
const profileName = document.querySelector('.info__name');
const profilePofession = document.querySelector('.info__profession');
const formName = document.querySelector('#nameInput');
const formProfession = document.querySelector('#professionInput');
const submitButton = document.querySelector('.input__button');
const form = document.querySelector('.form__input');

formName.value = profileName.textContent;
formProfession.value = profilePofession.textContent;

function openForm() {
    popUp.classList.add('pop-up_open');
    console.log(popUp.className);
}

function closeForm() {
    popUp.classList.remove('pop-up_open');
    console.log(popUp.className);
    formName.value = profileName.textContent;
    formProfession.value = profilePofession.textContent;
}

function submitForm() {
    popUp.classList.remove('pop-up_open');
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
form.addEventListener('submit', sendForm);







