export default class Api {
    constructor(){
        
    }
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-52/cards ', {
            method: 'GET',
            headers: {
                authorization: '87b6a5b0-f4e0-432d-92b2-4d1bc4496eec',
                'Content-Type': 'aplication/json'
            }
        })
        .then (res => res.json())
    }
    giveData() {
        return Promise.all([this.getInitialCards()])
    }
}