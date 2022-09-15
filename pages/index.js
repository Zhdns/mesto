import '../pages/index.css';
import Card from "../scripts/Card.js";
import { profile, card, preview, user, formObj } from "../scripts/utils/constants.js";
import Validation from "../scripts/Validation.js";
import Section from "../scripts/Section.js";
import PopUp from "../scripts/PopUp.js";
import UserInfo from "../scripts/UserInfo.js";

const profileRender = new UserInfo(user, profile, formObj);
profileRender.SetUserInfo(profile.container)

const cardList = new Section({
    items: user.photo,
    render: (item) => {
        const cards = new Card(card, preview, formObj)
        const element = cards.getElement(item)
        cardList.setItems(element)
    }
}, card.container)

cardList.renderItems()

const newCard = new Section({
    items: user.photo,
    render: () => {
        const cards = new Card(card, preview, formObj)
        const element = cards.addCard()
        newCard.setItems(element)
        new PopUp(card.popUp).close()
    }
}, card.container)

newCard.renderNewCard(card.form)


const form = document.querySelectorAll('.pop-up__form-input')
form.forEach((element) => {
    new Validation(formObj, element).render()
})


