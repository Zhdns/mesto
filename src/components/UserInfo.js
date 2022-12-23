
export default class UserInfo {
    constructor() {
        this._name = document.querySelector('.profile__info-name')
        this._job = document.querySelector('.profile__info-profession')
        this._avatar = document.querySelector('.profile__avatar')
    }
    getUserInfo() { 
        this._userInfo = {
            name: this._name,
            about: this._job,
        }
        return this._userInfo
        
    }
    setUserInfo(user) {
        if (user.name) { 
            this._name.textContent = user.name 
        }
        else {
            throw new Error ('ERORR NAME')
        }
        if (user.about) {
            this._job.textContent = user.about
        }
        else {
            throw new Error ('ERROR ABOUT')
        }
        if(user.avatar) {
            this._avatar.src = user.avatar
        }
        else {
            throw new Error ('ERROR AVATAR')
        }
    }
}
