import './index.css'

const PasswordItems = props => {
  const {eachList, checkS, onDeleteItem} = props
  const {id, website, userName, password, BgColor} = eachList
  const initial = website.toUpperCase().slice(0, 1)

  const onDelete = () => onDeleteItem(id)

  const passWord = checkS ? (
    <p className="user-name">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="Stars"
      className="star-image"
    />
  )

  return (
    <li>
      <div className="name-container">
        <div>
          <h1 className={`initial-letter ${BgColor}`}>{initial}</h1>
        </div>
        <div className="items-container">
          <p className="website-heading">{website}</p>
          <p className="user-name">{userName}</p>
          <div>{passWord}</div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItems
