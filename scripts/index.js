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
    inputError: '.pop-up__input-error',
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
    const validationCard = new Validation(formObj, formCard)
    const validationProfile = new Validation(formObj, formProfile)

const forms = document.querySelectorAll('.pop-up__form-input')
forms.forEach((element) => {
    new Validation(formObj, element).enableValidation()
})


//card function
function createCard(item) {
    const cardElement = new Card(card, preview, item).getElement()
    return cardElement
}

//preinstalled cards 
user.photo.forEach((item) => {
    card.container.prepend(createCard(item))
    })

    function addNewCard(e) {
        e.preventDefault();
        const newCard = { 
                name: cardNameInput.value,
                link: cardLinkInput.value,
            }
            card.container.prepend(createCard(newCard))
        closePopUp(cardPopUp)
    }

        export function previewOpen(name, link) {
            openPopUp(photoPopUp)
            previewPhoto.src = link
            previewPhoto.alt = name
            previewText.textContent = name
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
    validationProfile.cleanInputs()
    validationProfile.checkFormValidity()
    openPopUp(profilePopUp)
}

function openCardForm() {
    cardNameInput.value = ""
    cardLinkInput.value = ""
    validationCard.cleanInputs()
    validationCard.checkFormValidity()
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
formProfile.addEventListener('submit', sendForm);

//card form
newCardButton.addEventListener('click', openCardForm);
formCard.addEventListener('submit', addNewCard);



const closeButtons = document.querySelectorAll('.pop-up__close-button');
closeButtons.forEach((button) => { 
    const popup = button.closest('.pop-up');
    button.addEventListener('click', () => closePopUp(popup));
});