import { observable, action } from 'mobx'
import axios from 'axios'

const KEY = '14511609-744a126e4517a4592d7bbe83d'

export class ImagesStore {
  @observable images = []
  @observable favorites = []
  @observable currentPageNum
  @observable totalPagesAmount

  @action getImages = async query => {
    const pageNum = 1
    const images = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${query}&per_page=52&page=${pageNum}`
    )
    const totalHits = images.data.totalHits

    this.totalPagesAmount = Math.ceil(totalHits % 52)
    this.images = images.data.hits
  }

//   @action saveToFavorites = image => {
//     this.favorites.push(image)
//   }
}
