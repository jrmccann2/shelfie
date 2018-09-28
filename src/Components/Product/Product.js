import React from 'react';


export default function Product (props) {
    return (
      <div className="Product">
        <img src={props.imgurl} alt='' />
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
      </div>
    );
}