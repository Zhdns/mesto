
//Edit Nama and Profession form
const editNameButton = document.querySelector('.profile__info-button');
const closeEditNameForm = document.querySelector('#close-name-form');
const editNameForm = document.querySelector('#pop-up-profile-form');
const profileName = document.querySelector('.profile__info-name');
const profilePofession = document.querySelector('.profile__info-profession');
const formName = document.querySelector('#nameInput');
const formProfession = document.querySelector('#professionInput');
const submitNameEditForm = document.querySelector('#submit-name');
const nameForm = document.querySelector('#name-form');

//Add new card form
const addCardButton = document.querySelector('.profile__add-button');
const closeCardButton = document.querySelector('#close-card-form');
const cardNameInput = document.querySelector('#cardNameInput');
const cardLinkInput = document.querySelector('#cardLinkInput');
const submitCardForm = document.querySelector('#subbmit-card');
const editCardForm = document.querySelector('#pop-up-card-form');
const cardForm = document.querySelector('#card-form');
const cardTemplate = document.querySelector('#card-template').content;
const allCards = document.querySelector('.elements');

//card function
function cards(item) {
        const card = cardTemplate.querySelector('.elements__card').cloneNode(true);
        const cardPhoto = card.querySelector('.elements__photo')
        const cardName = card.querySelector('.elements__information-name')
        const cardLike = card.querySelector('.elements__information-button')
        const cardDelete = card.querySelector('.elements__delete-button')
        const cardPreview = document.querySelector('#popUpImg')
        const previewPhoto = document.querySelector('.pop-up__img')
        const previewText = document.querySelector('.pop-up__text-img')
        const previewCloseButton = document.querySelector('#previewCloseButton')

        cardPhoto.src = item.link
        cardName.textContent = item.name

        cardLike.addEventListener('click', (e) => {
            e.target.classList.toggle('elements__information-button_active')
        })

        cardDelete.addEventListener('click', (e) =>{
            e.target.closest('.elements__card').remove()
        })

        cardPhoto.addEventListener('click', function(){
            cardPreview.classList.add('pop-up_open')
            previewPhoto.src = item.link
            previewText.textContent = item.name
        })
        
        previewCloseButton.addEventListener('click', function(){
            cardPreview.classList.remove('pop-up_open')
        })
        return card
};

//preinstalled cards 
cardsPreset.forEach((item) => {allCards.prepend(cards(item))})


//Open form
function openNameForm() {
    formName.value = profileName.textContent;
    formProfession.value = profilePofession.textContent;
    editNameForm.classList.add('pop-up_open');
}

function openCardForm() {
    editCardForm.classList.add('pop-up_open');
}


//Clouse form
function closeNameForm() {
    editNameForm.classList.remove('pop-up_open');
}

function closeCardForm() {
    editCardForm.classList.remove('pop-up_open');
}


//Send form
function sendForm(e) {
    e.preventDefault();
    profileName.textContent = formName.value;
    profilePofession.textContent = formProfession.value;
    closeNameForm();
}

function addCard(e) {
    e.preventDefault();
    newCard = [
        {
            name: cardNameInput.value,
            link: cardLinkInput.value,
        }
    ]

    newCard.forEach((item) => {allCards.prepend(cards(item))})
    closeCardForm()
}

//edit form
editNameButton.addEventListener('click', openNameForm);
closeEditNameForm.addEventListener('click', closeNameForm); 
nameForm.addEventListener('submit', sendForm);

//card form
addCardButton.addEventListener('click', openCardForm);
closeCardButton.addEventListener('click', closeCardForm);









