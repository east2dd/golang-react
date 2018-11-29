import React from 'react';

const ProductItem = (props) => {
    return (
        <div>
           {props.match.params.id} -  {props.match.params.Name}
        </div>
    )
}

export default ProductItem;