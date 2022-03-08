import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <h1 style={ProductStyle}>This is Product Component</h1>
            </div>
        );
    }
}
  const ProductStyle={
      background : 'lightYellow',
      padding:'10px',
      height :'600px'
  }
export default Product;