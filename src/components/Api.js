export default class Api {
    constructor(config){
        this._headers = config.headers
        this._baseUrl = config.baseUrl
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
        return fetch(this._baseUrl + '/cards', {
            method: 'GET',
            headers: this._headers,
        })
        .then (this._checkResponse)
    }
    getUserInfo() { 
        return fetch(this._baseUrl + '/users/me', {
            method: 'GET',
            headers: this._headers,
        })
        .then (this._checkResponse)
    }
    setUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify ({
                name: data.name,
                about: data.about
            })
        })
        .then (this._checkResponse)
    }
    changeAvatar(data) {
        console.log(data)
        return fetch( this._baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify ({
                avatar: data.avatar,
            })
        })
        .then (this._checkResponse)
    }
    addCard(data) {
        return fetch(this._baseUrl + '/cards',{
            method:'POST',
            headers: this._headers,
            body:JSON.stringify ({
                name: data.name,
                link: data.link,
            })
        })
        .then (this._checkResponse)
    }
    like(id) {
        return fetch(this._baseUrl + `/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }
    unlike(id) {
        return fetch(this._baseUrl + `/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }
    deleteCard(id) {
        console.log(id)
        return fetch(this._baseUrl + `/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }
    getData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }
}