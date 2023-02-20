import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from '../PasswordItems'
import './index.css'

const classNames = [
  'button-1',
  'button-2',
  'button-3',
  'button-4',
  'button-5',
  'button-6',
]

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    userName: '',
    password: '',
    check: false,
    searchInput: '',
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({userName: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onCheckBox = () => {
    const {check} = this.state
    this.setState({check: !check})
  }

  onNewPasswordList = event => {
    event.preventDefault()
    const {userName, website, password} = this.state
    const index = Math.ceil(Math.random() * classNames.length - 1)
    const color = classNames[index]
    const newList = {
      id: uuidv4(),
      website,
      userName,
      password,
      BgColor: color,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
      userName: '',
      website: '',
      password: '',
    }))
  }

  onDeleteItem = id => {
    const {passwordList} = this.state
    const result = passwordList.filter(eachList => eachList.id !== id)
    this.setState({passwordList: result})
  }

  render() {
    const {
      passwordList,
      userName,
      website,
      password,
      check,
      searchInput,
    } = this.state
    const FilterList = passwordList.filter(eachList =>
      eachList.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="app-logo"
          />
          <div className="sub-container">
            <div className="image-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="password-bg-image"
              />
            </div>
            <div className="sub-card-container">
              <form onSubmit={this.onNewPasswordList}>
                <h1 className="card-heading">Add New Password</h1>
                <div className="label-flex">
                  <label htmlFor="website-logo" className="label">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="logos"
                    />
                  </label>
                  <input
                    placeholder="Enter Website"
                    id="website-logo"
                    className="input-field"
                    value={website}
                    onChange={this.onWebsite}
                  />
                </div>
                <div className="label-flex">
                  <label htmlFor="username-logo" className="label">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="logos"
                    />
                  </label>
                  <input
                    placeholder="Enter Username"
                    id="username-logo"
                    className="input-field"
                    value={userName}
                    onChange={this.onUsername}
                  />
                </div>
                <div className="label-flex">
                  <label htmlFor="password-logo" className="label">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="logos"
                    />
                  </label>
                  <input
                    placeholder="Enter Password"
                    id="password-logo"
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={this.onPassword}
                  />
                </div>
                <button type="submit" className="card-button">
                  Add
                </button>
              </form>
            </div>
            <div className="image-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-bg-image"
              />
            </div>
          </div>

          <div className="sub-container-2">
            <div className="count-search-container">
              <div className="count-flex">
                <h1 className="sub-head">Your Passwords</h1>
                <p className="count">{passwordList.length}</p>
              </div>

              <div>
                <label htmlFor="search-logo">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                    alt="search"
                    className="search-logo"
                  />
                </label>
                <input
                  placeholder="Search"
                  id="search-logo"
                  className="search-input"
                  type="search"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr />
            <div className="check-box">
              <input
                type="checkbox"
                id="myCheckbox"
                className="box-width"
                onClick={this.onCheckBox}
              />
              <label htmlFor="myCheckbox">Show Passwords</label>
            </div>
            {FilterList.length === 0 ? (
              <div className="image-align">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-bg-image"
                />
                <p className="no-password ">No Passwords</p>
              </div>
            ) : null}
            <ul>
              {FilterList.map(eachList => (
                <PasswordItems
                  eachList={eachList}
                  key={eachList.id}
                  checkS={check}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
