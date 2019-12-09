import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'

import EditIcon from '@material-ui/icons/EditOutlined'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

import EditDescriptionInput from './EditDescriptionInput'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 3%',
  },
  description: {
    width: '70%',
  },
  actions: {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  icon: {
    color: '#616161',
  },
}
class FavoriteActions extends Component {
  render() {
    const {
      classes,
      handleInput,
      descriptionInput,
      isEditModeOn,
      editFavorite,
      showEditFavorite,
      removeFavorite,
      favorite,
    } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.description}>
          <EditDescriptionInput
            handleInput={handleInput}
            descriptionInput={descriptionInput}
            isEditModeOn={isEditModeOn}
            editFavorite={editFavorite}
          />
        </div>

        <div className={classes.actions}>
          <EditIcon className={classes.icon} onClick={showEditFavorite} />
          <DeleteIcon className={classes.icon} onClick={() => removeFavorite(favorite.id)} />
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(FavoriteActions)
