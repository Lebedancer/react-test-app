import React from 'react'
import AppStore from '../../stores/app-store';
import AppToCart from './AddToCart.jsx';

function getCatalog() {
    console.log(AppStore.getCatalog());
    return { items: AppStore.getCatalog() }
}

export default React.createClass({
    getInitialState: function() {
        return getCatalog();
    },
    render: function() {
        let items = this.state.items.map(item => {
            return <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.cost} $</td>
                <td><AppToCart item={item}/></td>
            </tr>
        });
        return <table className='table table-hover'>
            <tbody>
                {items}
            </tbody>
        </table>
    },
})