export default class Api {
    constructor(){
        
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
            headers: {
                authorization: 'a8e6eff0-9937-4599-a4ad-161c65f9e9ed',
                'Content-Type': 'aplication/json'
            }
        })
        .then (this._checkResponse)
    }
    getUserInfo() { 
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/users/me ', {
            method: 'GET',
            headers: {
                authorization: 'a8e6eff0-9937-4599-a4ad-161c65f9e9ed',
                'Content-Type': 'aplication/json'
            }
        })
        .then (this._checkResponse)
    }
    setUserInfo(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'a8e6eff0-9937-4599-a4ad-161c65f9e9ed',
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify ({
                name: data.name,
                about: data.about
            })
        })
        .then (this._checkResponse)
    }
    giveData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }
    test() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-56/cards ', {
            method: 'GET',
            headers: {
                authorization: 'a8e6eff0-9937-4599-a4ad-161c65f9e9ed',
                'Content-Type': 'aplication/json'
            }
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result)
        })
    }
}