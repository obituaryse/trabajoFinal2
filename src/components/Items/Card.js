import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { EMPTY_IMG } from '../../shared/utils/constants';


export default class Card extends Component{
    constructor(props){
    super(props);
    console.log("constructor");
    this.state = {
        product:this.props.libro
        }
    }

    render(){
        let button;
        if (this.state.product.imagen) {
        button = <img alt={this.state.product.titulo} src={this.state.product.imagen} />;
        } else {
        button = <img src={EMPTY_IMG} alt="product" />;
        }
        
        return (
        <div key={this.state.product.id} className="item">
            <Link to={`/products/${this.state.product.id}`}>
            <div className="product-img">
                {button}
            </div>
            <div className="product-details">
            <h1 id="product-name">{this.state.product.titulo}</h1>
            <h4 id="product-description">{this.state.product.descripcion}</h4>
            </div>
            </Link>
            <div className="price-add">
            <h5 id="product-price">$ {this.state.product.precio}</h5>
            <Icon small id="add-icon">add_shopping_cart</Icon>
            </div>
        </div> 
        );
    }
}