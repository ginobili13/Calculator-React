import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div className="calculator__display" >
                {this.props.result}
            </div>
        );
    }
}

export default Display;