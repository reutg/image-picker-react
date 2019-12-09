import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Favorite from './Favorite'
import EmptyFavorites from './EmptyFavorites'

const styles = {
  container: {
    paddingTop: '2%',
    width: '35%',
    '@media (max-width:1000px)': {
      width: '100%',
    },
  },
  header: {
    textAlign: 'center',
  },
  favorites: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

    return (
      <div className={classes.container}>
        <Typography color='secondary' className={classes.header} variant='h6'>
          Favorites list
        </Typography>
        <div className={classes.favorites}>
          {imagesStore.favoritesLength <= 0 ? (
            <EmptyFavorites />
          ) : (
            imagesStore.favoritesToArray.map(favorite => (
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
