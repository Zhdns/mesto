
const profile = new Profile();
profile.action()


const card = new Card()
card.render(cardsPreset, grid)
card.renderNewCard(grid)

const form = document.querySelectorAll('.pop-up__form-input')
form.forEach((element) => {
    new Validation(formObj, element).render()
})

