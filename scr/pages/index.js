import '../pages/index.css';
import Card from "../components/Card.js"
import { profile, card, preview, user, formObj } from "../components/utils/constants.js"
import FormValidation from "../components/FormValidation.js"
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import PopUpForm from "../components/PopUpForm.js"
import PopUpPreview from "../components/PopUpPreview.js"

const form = document.querySelectorAll('.pop-up__form-input')
form.forEach((element) => {
    new FormValidation(formObj, element).enableValidation()
})

const profileRender = new UserInfo(user, profile);
profileRender.getUserInfo()


const popUpUser = new PopUpForm(profile.popUp, 
    {
        handleSubmit: (info, evt) => {
            evt.preventDefault();
            profileRender.setUserInfo(info.name, info.profession)
            popUpUser.close()
        }
})

popUpUser.setEventLisners()

const profileValidation = new FormValidation(formObj, profile.form)

profile.buttonEdit.addEventListener('click', () => { 
    popUpUser.open()
    profileValidation.cleanInputs()
    profileValidation.activateButton()
    profile.nameInput.value = profile.name.textContent
    profile.professionInput.value = profile.profession.textContent

})

const cardList = new Section({
    items: user.photo,
    render: (item) => {
        const cards = new Card(card, item, openPreview)
        const element = cards.getElement()
        cardList.setItems(element)
    }
}, card.container)

cardList.renderItems()

const popUpCard = new PopUpForm(card.popUp, 
    {
        handleSubmit: (info, evt) => {
            evt.preventDefault();
            const newCard = [{
                name: info.cardName,
                link: info.photoLink,
            }]
            
    
                const addCard = new Section({
                items: newCard,
                render: (item) => {
                    const cards = new Card(card, item, openPreview)
                    const element = cards.getElement()
                    addCard.setItems(element)
                    
                }
            }, card.container) 

            addCard.renderItems()
            popUpCard.close()
        }      
    })

    popUpCard.setEventLisners()

    const cardValidation = new FormValidation(formObj, card.form)

    card.buttonAdd.addEventListener('click', () => {
        popUpCard.open()
        cardValidation.cleanInputs()
        cardValidation.disableButton()
    })

const popUpPreview = new PopUpPreview(preview)

function openPreview(link, name) {
    popUpPreview.openPreview(link, name)
}



        
