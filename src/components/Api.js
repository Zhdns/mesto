import { data } from "autoprefixer"

export default class Api {
    constructor(config){
        this.headers = config.headers
    }
    _checkResponse(res) {
        if(res.ok) { 
            return res.json()
        }
        else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/cards ', {
            method: 'GET',
            headers: this.headers,
        })
        .then (this._checkResponse)
    }
    getUserInfo() { 
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/users/me ', {
            method: 'GET',
            headers: this.headers,
        })
        .then (this._checkResponse)
    }
    setUserInfo(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/users/me ', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify ({
                name: data.name,
                about: data.about
            })
        })
        .then (this._checkResponse)
    }
    changeAvatar(data) {
        console.log(data)
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/users/me/avatar', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify ({
                avatar: data.avatar,
            })
        })
        .then (this._checkResponse)
    }
    addCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/cards',{
            method:'POST',
            headers: this.headers,
            body:JSON.stringify ({
                name: data.name,
                link: data.link,
            })
        })
        .then (this._checkResponse)
    }
    like(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-56/cards/${id}/likes`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then(this._checkResponse)
    }
    unlike(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-56/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._checkResponse)
    }
    deleteCard(id) {
        console.log(id)
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-56/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._checkResponse)
    }
    giveData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }
}