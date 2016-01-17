import React from 'react'
import AppStore from '../stores/app-store';
import RemoveFromCart from './RemoveFromCart.jsx';
import IncreaseItem from './IncreaseItem.jsx';
import DecreaseItem from './DecreaseItem.jsx';

function getCart() {
    return { items: AppStore.getCart() }
}

export default React.createClass({
    getInitialState: function() {
        return getCart();
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(getCart())
    },
    render: function() {
        var total = 0;
        let items = this.state.items.map((item, index) => {
            let subtotal = item.cost * item.qty;
            total += subtotal;
            return <tr>
                <td>{item.title}</td>
                <td>{item.cost}</td>
                <td>{subtotal}</td>
                <td>
                    <IncreaseItem index={index} />
                    <DecreaseItem index={index} />
                </td>
                <td><RemoveFromCart index={index}/></td>
            </tr>
        });
        return <div className={items.length ? '': 'hidden'}>
            <h2>Cart</h2>
            <table className='table table-hover'>
                {items}
            </table>
        </div>
    },
})