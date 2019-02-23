import React, {Component} from 'react';
import Login from "./Login";
/* Header Component */

class Header extends Component{
    constructor(){
        super();
        this.state = {
            isOpen:false
        };
    }

    togglePopup(){
        this.setState({
            isOpen: !this.state.showPopup
        });
    }

    render(){
        return(
            /* Start of Header */
            <section className="header layout--center">
                <div className="header__content layout--wrapped">
                    {/* 
                    <div className="brand">
                        <a href="/"><div className="brand__name"><span>#</span>DEVRANT</div></a>
                    </div>
    
                    <div className="profile layout--center">
                        <div className="profile__picture">
                            <svg height="36" width="36">
                                <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                            </svg>
                        </div>
                        <div className="profile__name">Elon</div>
                    </div> 
                    */}
    
                    <div className="join">
                        {/* <a href="/login"> */}<span onClick={this.togglePopup.bind(this)}>Join</span>{/* </a> */}
                        {this.state.showPopup ?
                            <Login 
                                closePopup={this.togglePopup.bind(this)}   
                            />
                            : null
                        }
                        {/* <span>Sign Out</span> */}
                    </div>
                </div>
            </section>
            /* End of Header */
        );
    }
}

export default Header;