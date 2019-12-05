import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  form: {
    margin: '2% 3%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '70%',
  },
  input: {
    width: '80%',
  },
}

class SearchInput extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: '',
    }
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value })
  }

  getImages = event => {
    event.preventDefault()

    this.props.getImages(this.state.searchInput)
  }

  render() {
    const { classes } = this.props
    const { searchInput } = this.state

    return (
      <form className={classes.form} noValidate autoComplete='off' onSubmit={this.getImages}>
        <TextField
          className={classes.input}
          name='searchInput'
          value={searchInput}
          onChange={this.handleChange}
        />

        <Button type='submit' color='primary' variant='contained'>
          Search
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(SearchInput)
