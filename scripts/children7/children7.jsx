import React from 'react'
import Button from './Button'
import $ from 'jquery'

var arr = [1, 2, 2];

export default React.createClass({
    getInitialState: function () {
      return {
          list: [

          ]
      }
    },
    componentWillMount: function () {
        $.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true', function (response) {
            debugger;
            this.setState({
                list: response
            });
        }.bind(this))
    },
    render: function() {
        var list = this.state.list.map(function (obj) {
            return <Button>{obj.fname}</Button>
        });
        
        
        return  <div>{list}</div>
    }
})