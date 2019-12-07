import { observable, action, computed } from 'mobx'
import axios from 'axios'

const KEY = '14511609-744a126e4517a4592d7bbe83d'

export class ImagesStore {
  @observable images = []
  @observable favorites = []
  @observable currentPageNum
  @observable totalPagesAmount

  constructor() {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      this.favorites = JSON.parse(favorites)
    }
  }

  @action getImages = async query => {
    const pageNum = 1
    const images = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${query}&per_page=52&page=${pageNum}`
    )
    const totalHits = images.data.totalHits

    this.totalPagesAmount = Math.ceil(totalHits % 52)
    this.images = images.data.hits
  }

  @computed get favoritesLength() {
    return this.favorites.length
  }

  @action saveFavoritesToLocalStroage = () => {
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  @action saveToFavorites = image => {
    this.favorites.push(image)
    this.saveFavoritesToLocalStroage()
  }

  @action removeFavorite = favoriteId => {
    const favoriteIndex = this.favorites.findIndex(favorite => favorite.id === favoriteId)
    this.favorites.splice(favoriteIndex, 1)
    this.saveFavoritesToLocalStroage()
  }

  @action editFavorite = (favoriteId, newDescrpition) => {
    const favoriteIndex = this.favorites.findIndex(favorite => favorite.id === favoriteId)
    this.favorites[favoriteIndex].description = newDescrpition
    this.saveFavoritesToLocalStroage()
  }
}
