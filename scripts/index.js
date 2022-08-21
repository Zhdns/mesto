import Profile from "./Profile.js";
import Validation from "./Validation.js";
import Card from "./Card.js"
import {profile, card, preview, user, formObj} from "./constants.js"

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

