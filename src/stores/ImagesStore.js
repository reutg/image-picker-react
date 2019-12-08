import { observable, action, computed } from 'mobx'
import axios from 'axios'

const KEY = '14511609-744a126e4517a4592d7bbe83d'

export class ImagesStore {
  @observable images = []
  @observable favorites = {}
  @observable currentPageNum
  @observable totalPagesAmount
  @observable noResults

  constructor() {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      this.favorites = JSON.parse(favorites)
    }
  }

  @action getImages = async query => {
    const pageNum = 1
    const images = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${query}&per_page=52&page=${pageNum}&image_type="vector"`
    )
    const totalHits = images.data.totalHits

    this.totalPagesAmount = Math.ceil(totalHits % 52)

    if (images.data.hits.length > 0) {
      this.noResults = false
      this.images = images.data.hits
    } else {
      this.noResults = true
    }
  }

  @computed get favoritesLength() {
    return this.favorites.length
  }

  @computed get favoritesToArray() {
    return Object.values(this.favorites)
  }

  saveFavoritesToLocalStroage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  @action saveToFavorites = image => {
    const savedImage = {
      id: image.id,
      imageURL: image.largeImageURL,
      description: image.tags,
    }
    this.favorites[image.id] = savedImage
    this.saveFavoritesToLocalStroage()
  }

  @action removeFavorite = favoriteId => {
    delete this.favorites[favoriteId]
    this.saveFavoritesToLocalStroage()
  }

  @action editFavorite = (favoriteId, newDescrpition) => {
    this.favorites[favoriteId].description = newDescrpition
    this.saveFavoritesToLocalStroage()
  }
}
