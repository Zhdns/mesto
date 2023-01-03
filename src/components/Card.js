export default class Card {
    constructor({handleLike},{handleDelete}, card, data, preview, userId, api) { 
        this._card = card 
        this._element = this._card.template.querySelector('.elements__card').cloneNode(true);
        this._photo = this._element.querySelector('.elements__photo');
        this._text = this._element.querySelector('.elements__information-name')
        this.link = data.link
        this.name = data.name
        this.likes = data.likes
        this.ownerID = data.owner._id
        this._cardID = data._id
        this.userID = userId
        this._preview = preview
        this._api = api
        this.handleLike = handleLike
        this.handleDelete = handleDelete
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
        this._buttonLike.addEventListener('click', () => {this.handleLike()})
    }
    like() {
        if (!this._buttonLike.classList.contains('elements__information-button_active')) {
            this._api.like(this._cardID)
            .then((item) => {
                this._buttonLike.classList.add('elements__information-button_active')
                this._likeAmount.textContent = item.likes.length
            })
            .catch((err) => console.log(err))
        }
        else {
            this._api.unlike(this._cardID)
            .then((item) => {
                this._buttonLike.classList.remove('elements__information-button_active')
                this._likeAmount.textContent = item.likes.length
            })
            .catch((err) => console.log(err))
        }
    }
    _deleteAddListener() {
        this._buttonDelete.addEventListener('click', () => {this.handleDelete()})
    } 
    delete(){
        this._element.closest('.elements__card').remove()
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
            this._buttonLike.classList.add('elements__information-button_active')
        }
        

        return this._element
    }
}









