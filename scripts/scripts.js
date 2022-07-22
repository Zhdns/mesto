//popUp's
const profilePopUp = document.querySelector('#pop-up-profile-form');
const cardPopUp = document.querySelector('#pop-up-card-form');
const photoPopUp = document.querySelector('#popUpImg')

//Edit Name and Profession form
const profileEditButton = document.querySelector('.profile__info-button');
const closeEditNameForm = document.querySelector('#close-name-form');
const profileName = document.querySelector('.profile__info-name');
const profilePofession = document.querySelector('.profile__info-profession');
const formName = document.querySelector('#nameInput');
const formProfession = document.querySelector('#professionInput');
const nameForm = document.querySelector('#name-form');

//Add new card form
const newCardButton = document.querySelector('.profile__add-button');
const closeCardButton = document.querySelector('#close-card-form');
const cardNameInput = document.querySelector('#cardNameInput');
const cardLinkInput = document.querySelector('#cardLinkInput');
const cardForm = document.querySelector('#card-form');
const cardTemplate = document.querySelector('#card-template').content;
const allCards = document.querySelector('.elements');


//preview
const previewPhoto = document.querySelector('.pop-up__img')
const previewText = document.querySelector('.pop-up__text-img')
const previewCloseButton = document.querySelector('#previewCloseButton')

//card function
function addCards(item) {
        const card = cardTemplate.querySelector('.elements__card').cloneNode(true);
        const cardPhoto = card.querySelector('.elements__photo')
        const cardName = card.querySelector('.elements__information-name')
        const handleLikeButton = card.querySelector('.elements__information-button')
        const handleDeleteButton = card.querySelector('.elements__delete-button')

        cardPhoto.src = item.link
        cardPhoto.alt = item.name
        cardName.textContent = item.name
        

        handleLikeButton.addEventListener('click', (e) => {
            e.target.classList.toggle('elements__information-button_active')
        })

        handleDeleteButton.addEventListener('click', (e) =>{
            e.target.closest('.elements__card').remove()
        })

        cardPhoto.addEventListener('click', function(){
            open(photoPopUp)
            previewPhoto.src = item.link
            previewPhoto.alt = item.name
            previewText.textContent = item.name
        })
        
        
        
        return card
};

//preinstalled cards 
cardsPreset.forEach((item) => {allCards.prepend(addCards(item))})


//Open form
function open(form){
    form.classList.add('pop-up_open');
}

function openNameForm() {
    formName.value = profileName.textContent;
    formProfession.value = profilePofession.textContent;
    open(profilePopUp)
}

function openCardForm() {
    cardNameInput.value = ""
    cardLinkInput.value = ""
    open(cardPopUp)
}


//Clouse form
function close(form) {
    form.classList.remove('pop-up_open');
}


//Send form
function sendForm(e) {
    e.preventDefault();
    profileName.textContent = formName.value;
    profilePofession.textContent = formProfession.value;
    close(profilePopUp);
}

function addNewCard(e) {
    e.preventDefault();
    newCard = {
            name: cardNameInput.value,
            link: cardLinkInput.value,
        }

    allCards.prepend(addCards(newCard))
    close(cardPopUp)
}

//edit form
profileEditButton.addEventListener('click', openNameForm);
closeEditNameForm.addEventListener('click',  () => close(profilePopUp)); 
nameForm.addEventListener('submit', sendForm);

//card form
newCardButton.addEventListener('click', openCardForm);
closeCardButton.addEventListener('click', () => close(cardPopUp));
previewCloseButton.addEventListener('click', () => close(photoPopUp));
cardForm.addEventListener('submit', addNewCard);






