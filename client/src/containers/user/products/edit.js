import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct, updateProduct, clearProduct, deleteProduct } from '../../../actions'

class ProductEdit extends PureComponent {
  state = {
    formdata:{
      id: this.props.match.params.id,
      name: '',
      description: '',
      price: ''
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

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(updateProduct(this.state.formdata))
  }

  deletePost = () => {
    this.props.dispatch(deleteProduct(this.props.match.params.id))
  }

  redirectUser = () => {
    setTimeout(()=>{
      this.props.history.push('/user/me')
    },1000)
  }

  componentWillMount(){
    this.props.dispatch(getProduct(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps){
    let Product = nextProps.products.Product;
    this.setState({
      formdata:{
        id: Product.id,
        name: Product.name,
        description: Product.description,
        price: parseInt(Product.price)
      }
    })
  }

  componentWillUnmount(){
    this.props.dispatch(clearProduct())
  }

  render() {
    let products = this.props.products;
    return (
      <div className="article">
        {
          products.updateProduct ? 
            <div className="edit_confirm">
                post updated , <Link to={`/products/${products.Product._id}`}>
                    Click here to see your post
                </Link>
            </div>
          :null
        }
        {
          products.postDeleted ? 
            <div className="red_tag">
                Post Deleted
                {this.redirectUser()}
            </div>
          :null
        }

        <form onSubmit={this.submitForm}>
          <h2>Edit Product</h2>

          <div className="form_element">
            <input
                type="text"
                placeholder="Enter name"
                value={this.state.formdata.name}
                onChange={(event)=>this.handleInput(event,'name')}
            />
          </div>

          <textarea
              value={this.state.formdata.description}
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

          <button type="submit">Update Product</button>

          <div className="delete_post">
            <div className="button"
                onClick={this.deletePost}
            >
                Delete Product
            </div>
          </div>
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

export default connect(mapStateToProps)(ProductEdit)