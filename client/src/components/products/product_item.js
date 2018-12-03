import React from 'react';

const ProductItem = (props) => {
    return (
        <div>
           <p><img src="https://via.placeholder.com/300.png"/></p>
           <p>{props.match.params.id} -  {props.match.params.Name}</p>
        </div>
    )
}

export default ProductItem;