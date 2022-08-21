import Profile from "./Profile";
import Card from "./Card";
import { profile, card, preview, user, formObj } from "./constants";
import Validation from "./validation";


const profileRender = new Profile(user, profile);
profileRender.render(profile.container)
profileRender.action()

const cardRender = new Card(card, preview)
cardRender.render(user, card.container)
cardRender.renderNewCard(card.container)

const form = document.querySelectorAll('.pop-up__form-input')
form.forEach((element) => {
    new Validation(formObj, element).render()
})

