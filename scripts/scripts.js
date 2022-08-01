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


//card function
function addCard(item) {
        const card = cardTemplate.querySelector('.elements__card').cloneNode(true);
        const cardPhoto = card.querySelector('.elements__photo')
        const cardName = card.querySelector('.elements__information-name')
        const buttonLike = card.querySelector('.elements__information-button')
        const buttonDelete = card.querySelector('.elements__delete-button')

        cardPhoto.src = item.link
        cardPhoto.alt = item.name
        cardName.textContent = item.name
        

        buttonLike.addEventListener('click', (e) => {
            e.target.classList.toggle('elements__information-button_active')
        })

        buttonDelete.addEventListener('click', (e) =>{
            e.target.closest('.elements__card').remove()
        })

        cardPhoto.addEventListener('click', function(){
            openPopUp(photoPopUp)
            previewPhoto.src = item.link
            previewPhoto.alt = item.name
            previewText.textContent = item.name
        })
        
        
        
        return card
};

//preinstalled cards 
cardsPreset.forEach((item) => {cardsContainer.prepend(addCard(item))})

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
function openPopUp(form){
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

function addNewCard(e) {
    e.preventDefault();
    newCard = {
            name: cardNameInput.value,
            link: cardLinkInput.value,
        }
    cardsContainer.prepend(addCard(newCard))
    closePopUp(cardPopUp)
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



