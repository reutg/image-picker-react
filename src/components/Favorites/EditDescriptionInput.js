import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { IconButton, Input } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Done'

const styles = {
  inputContainer: {
    display: 'flex',
  },
  input: {
    fontSize: '0.8em',
  },
}
class EditDescriptionInput extends Component {
  render() {
    const { classes, handleInput, descriptionInput, isEditModeOn, editFavorite } = this.props
    return (
      <div className={classes.inputContainer}>
        <Input
          multiline
          value={descriptionInput}
          onChange={handleInput}
          classes={{ root: classes.input }}
          disableUnderline={isEditModeOn ? false : true}
          disabled={isEditModeOn ? false : true}
        />
        {isEditModeOn && (
          <IconButton onClick={editFavorite}>
            <SaveIcon color='primary' />
          </IconButton>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(EditDescriptionInput)
