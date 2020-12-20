import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './index.css';
import map from 'lodash/map';
import { URL_BOOK } from '../../shared/utils/constants';


class Products extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(URL_BOOK, {
      headers: {
        'Access-Control-Allow-Origin' : true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      responseType: 'json',
     }).then(res => {
        const books = res.data.libros;
        this.setState({ books });
      });
  }

  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>Libreria Patito</h4>
        </div>
        <div className="items">
          {map(this.state.books, (book)=> (
            <Card libro={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
