import React from 'react'
import actions from '../../actions/app-actions';

export default React.createClass({
    handleClick: function() {
        actions.addItem(this.props.item);
    },
    render: function() {
        return <button onClick={this.handleClick}>Add to cart</button>
    },
})