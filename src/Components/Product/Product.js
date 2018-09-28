import React from 'react';


export default function Product (props) {

    return (
      <div className="Product">
        <img src={props.imgurl} alt='' />
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        {/* <button onClick={ () => props.deleteButton.bind(this, props.productID)}>Delete</button> */}
      </div>
    );
}