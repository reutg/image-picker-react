import React, { Component } from 'react'
import { TextField, Button, FormHelperText } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '5% 3%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
}

class SearchInput extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: '',
      showError: false,
    }
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value })
  }

  loadImages = event => {
    event.preventDefault()
    
    const { searchInput } = this.state
    if (searchInput.length === 0) {
      this.setState({ showError: true })
    } else {
      this.props.loadImages(searchInput)
    }
  }

  render() {
    const { classes } = this.props
    const { searchInput, showError } = this.state

    return (
      <form className={classes.form} noValidate autoComplete='off' onSubmit={this.loadImages}>
        <div className={classes.inputContainer}>
          <TextField
            required
            className={classes.input}
            name='searchInput'
            value={searchInput}
            onChange={this.handleChange}
            placeholder='Search for images...'
          />

          {showError && <FormHelperText error>Please enter a search term</FormHelperText>}
        </div>
        <Button type='submit' color='secondary' variant='contained'>
          Search
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(SearchInput)
