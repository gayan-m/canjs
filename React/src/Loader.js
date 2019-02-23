import React from 'react';

/* Loader Component */

class Loader extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoading : props.isLoading}
    }
    
    render(){
        const isLoading = this.state.isLoading;
        if (isLoading === true) {
            return(
                <div className="loader">
                    <div className="spinner"></div>
                </div>
            );
        }else{
            return(
                <></>
            );
        }
    }    
}

export default Loader;
