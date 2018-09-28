import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        
        let inventory = this.props.inventory.map( (product, i) => {
            return (
                <div className="product-display" key={i}>
                    <Product name={product.product_name} price={product.price} imgurl={product.product_image}/>
                </div>
            )
          })

        return (
        <div className="Dashboard">
            Dashboard
            {inventory}
        </div>
        );
    }
}

export default Dashboard;