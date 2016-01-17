import React from 'react'

export default React.createClass({
    getInitialState: function () {
        return {
            val: 0
        }
    },
    update: function () {
      var newVla = parseInt(this.state.val, 10) + 1;
        this.setState({
            val: newVla
        })
    },
    componentWillReceiveProps: function (props) {
        this.setState({val: props.val})
    },
    shouldComponentUpdate: function () {
      return true
    },

    render: function() {
        return  <div>
            <a>{this.props.children}</a><br/>
        </div>

    }
})