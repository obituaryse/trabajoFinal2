import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import axios from 'axios';
import './index.css';
import { URL_GET_BOOK } from '../../shared/utils/constants';

class ShowProduct extends Component {
  constructor(props){
    super(props);
    this.state =  {
      book: ''
    }
  }

  componentDidMount() {
    var url = URL_GET_BOOK+this.props.match.params.id;
    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin' : true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      responseType: 'json',
     }).then(res => {
        const book = res.data.libro;
        this.setState({ book });
      });

  }

  render () {
    const currentProduct = this.state.book;
    
    return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={currentProduct.imagen} alt="product" />;
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{currentProduct.titulo}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{currentProduct.descripcion}</p>
              <p id="product-price">$ {currentProduct.precio}</p>
              <Link to={`/cart/${currentProduct.id}`}>
              <div className="shoping-cart">
                <button>AGREGAR</button>
                <Icon small id="add-icon">add_shopping_cart</Icon>
              </div>
              </Link>
            </div>
            <div className="product-review">
              <div className="stars">
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star_half</Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProduct;
