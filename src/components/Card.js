export default class Card {
    constructor(card, data, preview) { 
        this._card = card 
        this._element = this._card.template.querySelector('.elements__card').cloneNode(true);
        this._photo = this._element.querySelector('.elements__photo');
        this._text = this._element.querySelector('.elements__information-name')
        this.link = data.link
        this.name = data.name
        this.likes = data.likes
        this.ownerID = data.owner._id
        this.userID = '87b6a5b0-f4e0-432d-92b2-4d1bc4496eec'
        this._preview = preview
        this._buttonLike = this._element.querySelector('.elements__information-button');
        this._buttonDelete = this._element.querySelector('.elements__delete-button');
        this._likeAmount = this._element.querySelector('.elements__like-amount')

    }
    _openPreviewAddListener() {
        this._photo.addEventListener('click', () => {
            this._preview(this.link, this.name)
        })
    }
    _likeAddListener() {
        this._buttonLike.addEventListener('click', (e) => {this.like(e)})
    }
    like(e) {
        e.target.classList.toggle('elements__information-button_active')
    }
    _deleteAddListener() {
        this._buttonDelete.addEventListener('click', () => {this.delete()})
    } 
    delete(){
        this._element.remove()
        this._element = null
    }
    _setEventListeners() {
        this._likeAddListener();
        this._deleteAddListener();
        this._openPreviewAddListener()
    }  
    getElement() {
        this._photo.src = this.link;
        this._photo.alt = this.name;
        this._text.textContent = this.name;
        this._likeAmount.textContent = this.likes.length
        this._setEventListeners()

        if (!(this.ownerID === this.userID)) {
            this._buttonDelete.style.display = 'none'
        }
        if(this.likes.find((item) => this.userID === item._id)) {
            this._buttonLike.classList.classList.add('elements__information-button_active')
        }
        

        return this._element
    }
}









