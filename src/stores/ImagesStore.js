import { observable, action, computed } from 'mobx'
import axios from 'axios'

const KEY = '14511609-744a126e4517a4592d7bbe83d'

export class ImagesStore {
  @observable images = []
  @observable favorites = {}
  @observable totalPagesAmount
  @observable noResults
  @observable pageNum = 1
  @observable query

  constructor() {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      this.favorites = JSON.parse(favorites)
    }
  }

  @action goToPage = num => {
    if (num > 1 && num <= this.totalPagesAmount) {
      this.pageNum = num
    }
    this.fetchImages()
  }

  async fetchImages() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${this.query}&per_page=52&page=${this.pageNum}&image_type="vector"`
    )

    const { totalHits, hits } = response.data
    this.totalPagesAmount = Math.ceil(totalHits / 52)
    this.noResults = hits.length === 0
    this.images = hits
  }

  @action loadImages = async query => {
    this.query = query
    this.pageNum = 1
    this.fetchImages()
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
