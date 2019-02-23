import React, {Component} from 'react';

export default class Login extends Component {
    render(){
        return(
            <div className="popup popup--open">
                <div className="popup__header">
                   {/*  <a href="/"> */}<div title="Close" onClick={this.props.closePopup} className="close layout--center">
                        X
                    </div>{/* </a> */}
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">

                        <div className="form">
                            <div className="form__title">
                                JOIN <span className="highlight">#</span>DEVRANT
                            </div>
                            <div className="form__description">
                                Vote and comment on others' rants. Post your own.
                            </div>
                            <form name="login">
                                <div className="login">

                                    <input type="text" placeholder="USERNAME" />
                                    <input type="password" placeholder="PASSWORD" />

                                    <div className="loader">
                                        <div className="spinner"></div>
                                    </div>

                                    <div className="form__error">
                                        Some fields are missing !
                                    </div>

                                    <input type="submit" value="LET ME IN" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}