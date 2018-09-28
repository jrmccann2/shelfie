import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();

        this.deleteProduct = this.deleteProduct.bind(this)
    }


    deleteProduct(param) {
        axios.delete(`/api/deleteproduct/${param}`)
            .then( () => {
                this.props.refreshInventory()
            })
    }

    render() {
        
        let inventory = this.props.inventory.map( (product, i) => {
            return (
                <div className="product-display" key={i}>
                    <Product
                        name={product.product_name}
                        price={product.price}
                        imgurl={product.product_image}
                        // deleteButton={this.deleteProduct}
                        productID={product.product_id}
                        />
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