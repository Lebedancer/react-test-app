import React from 'react';

export default React.createClass({

    render: function () {
        var colors = this.props.colors;
        return  <div>{colors.red} / {colors.green} / {colors.blue}</div>
    }
});