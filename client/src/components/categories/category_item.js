import React from 'react';

const CategoryItem = (props) => {
    return (
        <div>
           {props.match.params.id} -  {props.match.params.Name}
        </div>
    )
}

export default CategoryItem;