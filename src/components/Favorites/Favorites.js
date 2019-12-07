import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Favorite from './Favorite'
import EmptyFavorites from './EmptyFavorites'

const styles = {
  container: {
    width: '30%',
  },
  header: {
    textAlign: 'center',
  },
  favorites: {
    marginTop: '10.5%',
  },
}

@inject('imagesStore')
@observer
class Favorites extends Component {
  removeFavorite = favoriteId => {
    this.props.imagesStore.removeFavorite(favoriteId)
  }

  editFavorite = (favoriteId, description) => {
    this.props.imagesStore.editFavorite(favoriteId, description)
  }

  render() {
    const { classes, imagesStore } = this.props
    console.log(toJS(imagesStore.favorites))
    return (
      <div className={classes.container}>
        <Typography color='secondary' className={classes.header} variant='h6'>
          Favorites list
        </Typography>
        <div className={classes.favorites}>
          {imagesStore.favoritesLength <= 0 ? (
            <EmptyFavorites />
          ) : (
            imagesStore.favorites.map(favorite => (
              <Favorite
                key={favorite.id}
                favorite={favorite}
                removeFavorite={this.removeFavorite}
                editFavorite={this.editFavorite}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Favorites)
