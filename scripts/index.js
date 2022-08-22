import Validation from "./Validation.js";
import Card from "./Card.js"


//popUp's
const profilePopUp = document.querySelector('#pop-up-profile-form');
const cardPopUp = document.querySelector('#pop-up-card-form');
const photoPopUp = document.querySelector('#popUpImg')

//Edit Name and Profession form
const profileEditButton = document.querySelector('.profile__info-button');
const profileCloseButton = document.querySelector('#close-name-form');
const profileName = document.querySelector('.profile__info-name');
const profilePofession = document.querySelector('.profile__info-profession');
const formName = document.querySelector('#pop-up__name-input');
const formProfession = document.querySelector('#pop-up__profession-input');
const formProfile = document.forms.profile;

//Add new card form
const newCardButton = document.querySelector('.profile__add-button');
const cardCloseButton = document.querySelector('#close-card-form');
const cardNameInput = document.querySelector('#cardNameInput');
const cardLinkInput = document.querySelector('#cardLinkInput');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');
const formCard = document.forms.card;

//preview
const previewPhoto = document.querySelector('.pop-up__img')
const previewText = document.querySelector('.pop-up__text-img')
const previewCloseButton = document.querySelector('#previewCloseButton')

    const formObj = {
    formElement: '.pop-up__form-input',
    inputElement: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
    }

    const user = {
    avatar: "./images/avatar/avatar.jpg",
    name: 'Денис Жалгосбай',
    profession: 'Кинооператор',
    photo: [
        {
            name: 'Мертвое море',
            link: './images/places/deadsea.png', 
        },
        {
            name: 'Стамбул',
            link: './images/places/istambul.jpg',
        },
        {
            name: 'Иерусалим',
            link: './images/places/jerusalem.jpg',
        },,
        {
            name: 'Москва',
            link: './images/places/moscow.jpg',
        },
        {
            name: 'Нови Винодольски',
            link: './images/places/noviVinodolski.jpg',
        },
        {
            name: 'Валенсия',
            link: './images/places/valencia.jpg',
        },
    ],
    }

    export const card = {
        container: cardsContainer,
        template: cardTemplate,
        form: formCard,
        popUp: cardPopUp,
        buttonClose: cardCloseButton,
        nameInput: cardNameInput,
        linkInput: cardLinkInput,
    }

    export const preview = {
        popUp: previewPhoto,
        buttonClose: previewCloseButton,
        nameInput: previewText,
        photoInput: photoPopUp,
    }


//validation
const form = document.querySelectorAll('.pop-up__form-input')
form.forEach((element) => {
    new Validation(formObj, element).enableValidation()
})


//card function
//const cardRender = new Card(card, preview, item)

//preinstalled cards 
user.photo.forEach((item) => {
    card.container.prepend(new Card(card, preview, item).getElement())
    })

    function addNewCard(e) {
        e.preventDefault();
        const newCard = { 
                name: cardNameInput.value,
                link: cardLinkInput.value,
            }
            card.container.prepend(new Card(card, preview, newCard).getElement())
        closePopUp(cardPopUp)
    }

        export function previewOpen(name, link) {
            openPopUp(photoPopUp)
            previewPhoto.src = link
            previewPhoto.alt = name
            previewText.textContent = name
        }
    
    

function cleanInputs(form) {
    const errorElement = Array.from(form.querySelectorAll(`.pop-up__input-error`))
    const inputs = Array.from(form.querySelectorAll('.pop-up__input-text'))
    errorElement.forEach((element) => {
        element.textContent = ""
        element.classList.remove(formObj.inputTextError)
    })
    inputs.forEach((input) => {
        input.classList.remove(formObj.inputError)
    })
}

function activateButton() {
    const button = document.querySelector('.pop-up__input-button')
    button.removeAttribute('disabled');
}

function blockButton() {
    const button = document.querySelector('#subbmit-card')
    button.setAttribute('disabled', true);
}

//Open form
export function openPopUp(form){
    form.classList.add('pop-up_open');
    document.addEventListener('keydown', closeByEscape)
    form.addEventListener('click', closeOnOverlay)
}

function openNameForm() {
    formName.value = profileName.textContent;
    formProfession.value = profilePofession.textContent;
    cleanInputs(formProfile)
    activateButton()
    openPopUp(profilePopUp)
}

function openCardForm() {
    cardNameInput.value = ""
    cardLinkInput.value = ""
    cleanInputs(formCard)
    blockButton()
    openPopUp(cardPopUp)
}


//Clouse form
function closePopUp(form) {
    form.classList.remove('pop-up_open');
    document.removeEventListener('keydown', closeByEscape) 
    form.removeEventListener('click', closeOnOverlay)  
}

//esc
function closeByEscape(e) {
    if (e.key === 'Escape') {
        const popUp = document.querySelector('.pop-up_open');
        closePopUp(popUp); 
    }
}

//click on overlay 
function closeOnOverlay(e) {
    const popUp = document.querySelector('.pop-up_open');
    if (e.target === popUp) {
        closePopUp(popUp);
    }
}


//Send form
function sendForm(e) {
    e.preventDefault();
    profileName.textContent = formName.value;
    profilePofession.textContent = formProfession.value;
    closePopUp(profilePopUp);
}



//edit form
profileEditButton.addEventListener('click', openNameForm);
profileCloseButton.addEventListener('click',  () => closePopUp(profilePopUp)); 
formProfile.addEventListener('submit', sendForm);

//card form
newCardButton.addEventListener('click', openCardForm);
cardCloseButton.addEventListener('click', () => closePopUp(cardPopUp));
previewCloseButton.addEventListener('click', () => closePopUp(photoPopUp));
formCard.addEventListener('submit', addNewCard);



