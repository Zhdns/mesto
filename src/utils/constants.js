    //profile's constants
    const profilePlace = document.querySelector('.profile')
    const profileCloseButton = document.querySelector('#close-name-form');
    const formName = document.querySelector('#pop-up__name-input');
    const formProfession = document.querySelector('#pop-up__profession-input');
    const formProfile = document.forms.profile;
    const profilePopUp = document.querySelector('#pop-up-profile-form');
    const profileProfession = document.querySelector('.profile__info-profession');
    const profileName = document.querySelector('.profile__info-name')
    const profileImage = document.querySelector('.profile__avatar')
    const profileEditButton = document.querySelector('.profile__info-button')
    const avatarPopUp = document.querySelector('#pop-up-avatar-form')
    const avatarButton = document.querySelector('.profile__avatar-button')
    const avatarForm = document.forms.avatar

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
    const deleteConfirmation = document.querySelector('#pop-up-delete')

    //photo
    const deadSea = new URL('../images/places/deadsea.png', import.meta.url)
    const istambul = new URL('../images/places/istambul.jpg', import.meta.url)
    const jerusalem = new URL('../images/places/jerusalem.jpg', import.meta.url)
    const moscow = new URL('../images/places/moscow.jpg', import.meta.url)
    const noviVinodolski = new URL('../images/places/noviVinodolski.jpg', import.meta.url)
    const valencia = new URL('../images/places/valencia.jpg', import.meta.url)
    const avatar = new URL('../images/avatar/avatar.jpg', import.meta.url)    

    export const formObj = {
    formElement: '.pop-up__form-input',
    inputElement: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
    }

    export const user = {
    avatar: avatar,
    name: 'Денис Жалгосбай',
    profession: 'Кинооператор',
    photo: [
        {
            name: 'Мертвое море',
            link: deadSea, 
        },
        {
            name: 'Стамбул',
            link: istambul,
        },
        {
            name: 'Иерусалим',
            link: jerusalem,
        },
        {
            name: 'Москва',
            link: moscow,
        },
        {
            name: 'Нови Винодольски',
            link: noviVinodolski,
        },
        {
            name: 'Валенсия',
            link: valencia,
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
        confirmWindow: deleteConfirmation,
    }

    export const preview = {
        popUp: popUpPreview,
        buttonClose: previewCloseButton,
        nameInput: previewText,
        photoInput: previewPhoto,
    }

    export const profile = {
        container: profilePlace,
        form: formProfile,
        popUp: profilePopUp,
        buttonClose: profileCloseButton,
        nameInput: formName,
        professionInput: formProfession,
        name: profileName,
        profession: profileProfession,
        avatar: profileImage,
        buttonEdit: profileEditButton,
        avatarPopUp: avatarPopUp,
        avatarButton: avatarButton,
        avatarForm: avatarForm,

    }

