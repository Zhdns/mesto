
export default class UserInfo {
    constructor(name, job, avatar) {
        this._name = name
        this._job = job
        this._avatar = avatar
    }
    getUserInfo() { 
        this._userInfo = {
            name: this._name.textContent,
            about: this._job.textContent,
            
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
