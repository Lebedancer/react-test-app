import React from 'react'
import actions from '../actions/app-actions';
import Catalog from './catalog/Catalog.jsx';
import Cart from './Cart.jsx';

export default React.createClass({
    render: function() {
        return <div>
            <h1>My Flux App</h1>
            <Catalog />

            <Cart />
            </div>
    },
})