import '../pages/index.css';
import Card from "./Card.js";
import { profile, card, preview, user, formObj } from "./constants.js";
import Validation from "./validation.js";
import Section from "./section.js";
import PopUp from "./PopUp.js";
import UserInfo from "./UserInfo.js";

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


