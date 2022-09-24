
export default class UserInfo {
    constructor(user, data) {
        this.user = user
        this.data = data
    }
    getUserInfo() { 
        this.data.avatar.src = this.user.avatar
        this.data.name.textContent = this.user.name
        this.data.profession.textContent = this.user.profession
    }
    setUserInfo(name, profession) {
        this.data.name.textContent = name
        this.data.profession.textContent = profession
    }
}

