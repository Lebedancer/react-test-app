import React from 'react';

export default React.createClass({
    render: function () {
        return <input type='range' min='0' max='255' onChange={this.props.update} />
    }
});