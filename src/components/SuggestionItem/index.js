// Write your code here

const SuggestionItem = props => {
  const {each} = props
  return (
    <li>
      <div className="liItem">
        <p className="para">{each.suggestion}</p>

        <button className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            className="arrows"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
