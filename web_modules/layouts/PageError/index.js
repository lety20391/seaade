import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import styles from "./PageError.scss"
/**
 * Error page
 */
export default class PageError extends Component {
  static propTypes = {
    error: PropTypes.number,
    errorText: PropTypes.string,
  };

  static defaultProps = {
    error: 404,
    errorText: "Page Not Found",
  };

  render() {
    const {
      error,
      errorText,
    } = this.props

    return (
      <div className={ styles.container }>
        <Helmet
          title={ `${error} - ${errorText}` }
        />
        <div className={ styles.oops }>{ '😱 Oooops!' }</div>
        <div className={ styles.text }>
          <p className={ styles.title }>
            <strong>{ error }</strong>
            { ' ' }
            { errorText }
          </p>
          {
            error === 404 &&
              <div>
                { 'It seems you find a broken link. ' }
                { 'Sorry about that. ' }
                <br />
                { 'Do not hesitate to report me this page 😁.' }
              </div>
          }
        </div>
      </div>
    )
  }
}