import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import FavoriteDialog from './FavoriteDialog'
import FavoriteActions from './FavoriteActions'

const styles = {
  favorite: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '3%',
    overflow: 'hidden',
    width: '90%',
  },
  image: {
    width: '10vh',
    height: '10vh',
  },
}

class Favorite extends Component {
  constructor() {
    super()
    this.state = {
      descriptionInput: '',
      isEditModeOn: false,
      isDialogOpen: false,
    }
  }

  componentDidMount = () => {
    this.setState({ descriptionInput: this.props.favorite.description })
  }

  showEditFavorite = () => {
    this.setState({ isEditModeOn: true })
  }
  handleInput = event => {
    this.setState({ descriptionInput: event.target.value })
  }

  editFavorite = () => {
    const { favorite } = this.props
    const { descriptionInput } = this.state
    if (descriptionInput && descriptionInput.length) {
      this.setState({ isEditModeOn: false })
      this.props.editFavorite(favorite.id, descriptionInput)
    }
  }

  openDialog = () => {
    this.setState({ isDialogOpen: true })
  }

  closeDialog = () => {
    this.setState({ isDialogOpen: false })
  }

  render() {
    const { isEditModeOn, descriptionInput, isDialogOpen } = this.state
    const { classes, favorite, removeFavorite } = this.props
    return (
      <>
        <Paper className={classes.favorite}>
          <img
            onClick={this.openDialog}
            className={classes.image}
            src={favorite.imageURL}
            alt={favorite.description}
          />
          <FavoriteActions
            favorite={favorite}
            handleInput={this.handleInput}
            descriptionInput={descriptionInput}
            isEditModeOn={isEditModeOn}
            editFavorite={this.editFavorite}
            showEditFavorite={this.showEditFavorite}
            removeFavorite={removeFavorite}
          />
        </Paper>
        <FavoriteDialog
          favorite={favorite}
          isDialogOpen={isDialogOpen}
          closeDialog={this.closeDialog}
          removeFavorite={removeFavorite}
          showEditFavorite={this.showEditFavorite}
        />
      </>
    )
  }
}

export default withStyles(styles)(Favorite)
