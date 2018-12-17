import React from 'react';

const CategoryShow = (props) => {
    return (
        <div>
           {props.match.params.id} -  {props.match.params.Name}
        </div>
    )
}

export default CategoryShow;