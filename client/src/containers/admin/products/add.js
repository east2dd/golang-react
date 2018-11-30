import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, clearNewBook } from '../../actions'

class AddProduct extends Component {
    state = {
        formdata:{
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    showNewBook = (book) => (
        book.post ?
            <div className="conf_link">
                Cool !! <Link to={`/products/${book.bookId}`}>
                    Click the link to see the post
                </Link>
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addProduct({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <textarea
                        value={this.state.formdata.review}
                        onChange={(event)=>this.handleInput(event,'description')}
                    />

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter Price"
                            value={this.state.formdata.price}
                            onChange={(event)=>this.handleInput(event,'price')}
                        />
                    </div>

                    <button type="submit">Add review</button>
                    {
                        this.props.products.newbook ? 
                            this.showNewBook(this.props.products.newbook)
                        :null
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products:state.products
    }
}

export default connect(mapStateToProps)(AddProduct)