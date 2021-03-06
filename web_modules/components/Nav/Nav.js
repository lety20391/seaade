import React, { Component } from "react"
import cx from "classnames"
import { Link } from "statinamic/lib/Link"

import styles from "./Nav.scss"
// import logo from "./logo.png"

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: false,
      collaspe: true,
    }

    this.attachNavScroll = this.attachNavScroll.bind(this)
    this.handleCollaspeToggle = this.handleCollaspeToggle.bind(this)
    this.dockNav = this.dockNav.bind(this)
  }

  componentDidMount() {
    this.attachNavScroll()
  }

  componentDidUpdate() {
    this.attachNavScroll()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.dockNav)
  }
  attachNavScroll() {
    window.addEventListener("scroll", this.dockNav)
  }

  dockNav() {
    const docked = document.body.scrollTop > 10

    if (this.state.docked !== docked) {
      this.setState({
        docked,
      })
    }
  }

  handleCollaspeToggle() {
    this.setState({
      collaspe: !this.state.collaspe,
    })
  }

  render() {
    const navClass = cx(styles.wrapper, {
      [styles.docked]: this.state.docked,
    })
    const collaspeClass = cx("navbar-collapse", {
      collapse: this.state.collaspe,
    })
    return (
      <nav id="site-nav" className={ navClass }>
        <div className="container">
          <div className="navbar-header">
            <div className="site-branding">
              <Link
                to="/"
                className="logo"
              >
                {/* <img
                  className={ styles.logoImg }
                  src={ logo }
                /> */}
                SEAADE 2016
              </Link>
            </div>
            <button
              onClick={ this.handleCollaspeToggle }
              className="navbar-toggle collapsed"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className={ collaspeClass }>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="/about/" activeClassName="active">About</Link>
              </li>
              <li>
                <Link to="/important-date/" activeClassName="active">Important Date</Link>
              </li>
              <li>
                <Link to="/planning/" activeClassName="active">Planning</Link>
              </li>
              <li>
                <Link to="/abstract-submission/" activeClassName="active">Abstract Submission</Link>
              </li>
              <li>
                <Link to="/registration/" activeClassName="active">Registration</Link>
              </li>
              <li>
                <Link to="/general-info/" activeClassName="active">General Info</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
  }
}

export default Nav
