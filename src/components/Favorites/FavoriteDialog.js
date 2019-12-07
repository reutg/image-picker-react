import React, { Component } from 'react'
import { Dialog } from '@material-ui/core'
import FavoriteActions from './FavoriteActions'
import { withStyles } from '@material-ui/styles'

const styles = {
  image: {
    width: '100%',
    height: '100%',
  },
  actions: {
    margin: '3% 0',
    display: 'flex',
    justifyContent: 'center',
  },
}

class FavoriteDialog extends Component {
  render() {
    const {
      classes,
      favorite,
      closeDialog,
      isDialogOpen,
      descriptionInput,
      editFavorite,
      handleInput,
      isEditModeOn,
      removeFavorite,
      showEditFavorite,
    } = this.props
    return (
      <Dialog onClose={closeDialog} open={isDialogOpen}>
        <div>
          <img className={classes.image} src={favorite.imageURL} alt={favorite.description} />
        </div>
        <div className={classes.actions}>
          <FavoriteActions
            favorite={favorite}
            handleInput={handleInput}
            descriptionInput={descriptionInput}
            isEditModeOn={isEditModeOn}
            editFavorite={editFavorite}
            showEditFavorite={showEditFavorite}
            removeFavorite={removeFavorite}
          />
        </div>
      </Dialog>
    )
  }
}

export default withStyles(styles)(FavoriteDialog)
