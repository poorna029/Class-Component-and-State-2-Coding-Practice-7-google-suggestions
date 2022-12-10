// Write your code here

import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {input: ''}

  Input = event => {
    console.log(event.target.value)
    this.setState({input: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {input} = this.state
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(input.toLowerCase()),
    )
    console.log(filteredList)
    return (
      <div className="main">
        <div className="submain">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image-size"
          />
          <div className="searchInput">
            <div className="searchbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="iconInt"
                alt="search icon"
              />
              <input
                type="search"
                className="googleInput"
                onChange={this.Input}
              />
            </div>
            <ul className="ulist">
              {filteredList.map(each => (
                <SuggestionItem each={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
