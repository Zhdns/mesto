
export default class UserInfo {
    constructor(name, profession) {

        this._name = document.querySelector(name)
        this._profession = document.querySelector(profession)

    }
    getUserInfo() { 
        this._userInfo = {
            name: this._name,
            profession: this._profession,
        }
        return this._userInfo
        
    }
    setUserInfo(name, profession) {
        this._name.textContent = name
        this._profession.textContent = profession
    }
}
