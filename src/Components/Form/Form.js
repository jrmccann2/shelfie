import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
        }
        this.handleImgurl = this.handleImgurl.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    handleName (event){
        this.setState({
            name: event.target.value
        })
    }

    handlePrice (event){
        this.setState({
            price: event.target.value
        })
    }

    handleImgurl(event){
        this.setState({
            imgurl: event.target.value
        })
    }

    addProduct(){
        let {name, price, imgurl} = this.state
        axios.post('/api/product', {name, price, imgurl})
            .then( () => {
                this.props.refreshInventory()
                this.clearInputs()
            })
    }

    clearInputs(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    render() {
        return (
        <div className="Form">
            <div className='form-img-preview'>
                <img src={this.state.imgurl} alt=''/>
            </div>
            <p>
                Image URL:
                <input type="text" placeholder="Image URL" value={this.state.imgurl} onChange={this.handleImgurl} />
            </p>
            <p>
                Product Name:
                <input type="text" placeholder="Product Name" value={this.state.name} onChange={this.handleName} />
            </p>
            <p>
                Price:
                <input type="text" placeholder="Price" value={this.state.price} onChange={this.handlePrice} />
            </p>
            <div className='form-button-box'>
                <button onClick={this.clearInputs}>Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>

        </div>
        );
    }
}

export default Form;