class Utils{
    constructor(form, config) {
        this.form = form 
        this.config = config
    }
    cleanInputs() {
        const formElement = this.form.querySelectorAll(`.pop-up__input-error`)
        const inputsElement = this.form.querySelectorAll('.pop-up__input-text')
        formElement.forEach((element) => {
            element.textContent = ""
            element.classList.remove(this.config.inputTextError)
        })
        inputsElement.forEach((input) => {
            input.classList.remove(this.config.inputError)
        })
    }
    blockSubmit() {
        this.button = this.form.querySelector(this.config.buttonElement)
        console.log(this.button)
        this.button.setAttribute('disabled', true);
    }
}