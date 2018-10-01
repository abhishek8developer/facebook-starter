import React, { Component } from 'react'

class Error extends Component {
    render() {
        const { errorId, errorText } = this.props;
        return (
            <div className="col-sm-12  px-md-0 ">
                <small id={errorId} className="text-danger">
                    {errorText}
                </small>      
            </div>
        )
    }
}

export default Error;