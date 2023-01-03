import '../pages/index.css';
import Card from "../components/Card.js"
import { profile, card, preview, formObj } from "../utils/constants.js"
import FormValidation from "../components/FormValidation.js"
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import PopUpForm from "../components/PopUpForm.js"
import PopUpPreview from "../components/PopUpPreview.js"
import Api from '../components/Api.js';
import PopUpConfirm from "../components/PopUpConfirm.js"


//User

const profileRender = new UserInfo(profile.name, profile.profession, profile.avatar);
let userId

//Card

function createCard(item) {
    const cards = new Card({
        handleLike: () => {
            cards.like()
        }
    },{
        handleDelete: () => {
            deleteConfirmation.setCallback(() => {
                api.deleteCard(item._id)
                .then(() => {
                    cards.delete()
                    deleteConfirmation.close()
                })
                .catch((err) => console.log(err))
            })
            deleteConfirmation.open()
        }
    }, card, item, openPreview, userId, api)
    const cardElement = cards.getElement()

    return cardElement
}

const cardList = new Section({
    render: (item) => {
        const element = createCard(item)
        cardList.addItems(element)
        }
}, card.container)   

const popUpPreview = new PopUpPreview(preview)

function openPreview(link, name) {
    popUpPreview.open(link, name)
}

//Vavidation

const cardValidation = new FormValidation(formObj, card.form)
    cardValidation.enableValidation()

    card.buttonAdd.addEventListener('click', () => {
        popUpCard.open()
        cardValidation.cleanInputs()
        cardValidation.disableButton()
    })

const profileValidation = new FormValidation(formObj, profile.form)
profileValidation.enableValidation()

profile.buttonEdit.addEventListener('click', () => { 
    popUpUser.open()
    profileValidation.cleanInputs()
    profileValidation.activateButton()
    const {name, about} = profileRender.getUserInfo() 
        profile.nameInput.value = name
        profile.professionInput.value = about    
})

const avatarValidation = new FormValidation(formObj, profile.avatarForm)
avatarValidation.enableValidation()

profile.avatarButton.addEventListener('click', ()=> {
    popUpAvatar.open()
    avatarValidation.cleanInputs()
    avatarValidation.disableButton()
})

//Forms

const popUpUser = new PopUpForm(profile.popUp, (items) => {
    popUpUser.loading(true)
    api.setUserInfo(items)
        .then((item) => {
            profileRender.setUserInfo(item)
            popUpUser.close()
        })
        .catch((err) => console.log(err))
        .finally(() => popUpUser.loading(false))
})

const popUpAvatar = new PopUpForm(profile.avatarPopUp, (items) => { 
    console.log(items)
    popUpAvatar.loading(true)
    api.changeAvatar(items)
        .then((item) => {
            profileRender.setUserInfo(item)
            popUpAvatar.close()
        })
        .catch((err) => console.log(err))
        .finally(() => popUpAvatar.loading(false))
})
    

const popUpCard = new PopUpForm(card.popUp, (items) => {
    popUpCard.loading(true)
    api.addCard(items)
        .then((item) => {
            const card = createCard(item)
            cardList.addItems(card)
            popUpCard.close()
        })
        .catch((err) => console.log(err))
        .finally(() => popUpCard.loading(false))
})

    popUpCard.setEventLisners()
    popUpUser.setEventLisners()
    popUpAvatar.setEventLisners()
    popUpPreview.setEventLisners()

const deleteConfirmation = new PopUpConfirm(card.confirmWindow)
deleteConfirmation.setEventLisners()



//API

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
    headers: {
        authorization: 'a8e6eff0-9937-4599-a4ad-161c65f9e9ed',
        'Content-Type': 'application/json'
    }
})
api
    .getData()
    .then(([cards, userData]) => {
        profileRender.setUserInfo(userData)
        userId = userData._id
        cardList.renderItems(cards) 
    })
    .catch((err) => console.log(err))

        
