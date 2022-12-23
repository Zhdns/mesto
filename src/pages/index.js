//import '../pages/index.css';
import Card from "../components/Card.js"
import { profile, card, preview, user, formObj } from "../utils/constants.js"
import FormValidation from "../components/FormValidation.js"
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import PopUpForm from "../components/PopUpForm.js"
import PopUpPreview from "../components/PopUpPreview.js"
import Api from '../components/Api.js';


const profileRender = new UserInfo();



function createCard(item) {
    const cards = new Card(card, item, openPreview)
    const cardElement = cards.getElement()

    return cardElement
}

const cardList = new Section({
    render: (item) => {
        const element = createCard(item)
        cardList.addItems(element)
        }
}, card.container)




const popUpUser = new PopUpForm(profile.popUp, (items) => {
    api.setUserInfo(items)
        .then((item) => {
            profileRender.setUserInfo(item)
        })
})
    

popUpUser.setEventLisners()

const profileValidation = new FormValidation(formObj, profile.form)
profileValidation.enableValidation()

profile.buttonEdit.addEventListener('click', () => { 
    popUpUser.open()
    profileValidation.cleanInputs()
    profileValidation.activateButton()
    profile.nameInput.value = profileRender.getUserInfo().name.textContent
    profile.professionInput.value = profileRender.getUserInfo().about.textContent

})



const popUpCard = new PopUpForm(card.popUp, 
    {
        handleSubmit: (info, evt) => {
            evt.preventDefault();
            const newCard = {
                name: info.cardName,
                link: info.photoLink,
            }

            const card = createCard(newCard)
            cardList.addItems(card)
            popUpCard.close()
        }      
    })

    popUpCard.setEventLisners()

    const cardValidation = new FormValidation(formObj, card.form)
    cardValidation.enableValidation()

    card.buttonAdd.addEventListener('click', () => {
        popUpCard.open()
        cardValidation.cleanInputs()
        cardValidation.disableButton()
    })

const popUpPreview = new PopUpPreview(preview)

function openPreview(link, name) {
    popUpPreview.open(link, name)
    popUpPreview.setEventLisners()
}

const api = new Api()
api
    .giveData()
    .then(([cards, userData]) => {
        profileRender.setUserInfo(userData)
        cardList.renderItems(cards) 
    })

    api.test()


        
