    //profile's constants
    const profilePlace = document.querySelector('.profile')
    const profileTemplate = document.querySelector('#profile-template').content
    const profileCloseButton = document.querySelector('#close-name-form');
    const formName = document.querySelector('#pop-up__name-input');
    const formProfession = document.querySelector('#pop-up__profession-input');
    const formProfile = document.forms.profile;
    const profilePopUp = document.querySelector('#pop-up-profile-form');

    //card's constants
    const grid = document.querySelector('.elements') 
    const templateCard = document.querySelector('#card-template').content;
    const popUpPreview = document.querySelector('#popUpImg');
    const previewPhoto = document.querySelector('.pop-up__img');
    const previewText = document.querySelector('.pop-up__text-img')
    const previewCloseButton = document.querySelector('#previewCloseButton')
    const cardCloseButton = document.querySelector('#close-card-form');
    const cardNameInput = document.querySelector('#cardNameInput');
    const cardLinkInput = document.querySelector('#cardLinkInput');
    const cardPopUp = document.querySelector('#pop-up-card-form');
    const cardAddButton = document.querySelector('.profile__add-button');
    const formCard = document.forms.card
    

    export const formObj = {
    formElement: '.pop-up__form-input',
    inputElement: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
    }

    export const user = {
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
        container: grid,
        template: templateCard,
        form: formCard,
        popUp: cardPopUp,
        buttonClose: cardCloseButton,
        nameInput: cardNameInput,
        linkInput: cardLinkInput,
        buttonAdd: cardAddButton,
    }

    export const preview = {
        popUp: popUpPreview,
        buttonClose: previewCloseButton,
        nameInput: previewText,
        photoInput: previewPhoto,
    }

    export const profile = {
        container: profilePlace,
        template: profileTemplate,
        form: formProfile,
        popUp: profilePopUp,
        buttonClose: profileCloseButton,
        nameInput: formName,
        professionInput: formProfession,
    }

