import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class CartProducts extends Component {
  constructor(props){
    super(props);
    this.state =  {
      book: ''
    }
  }

  componentDidMount() {
    var url = 'http://localhost:3000/libro/'+this.props.match.params.id;
    console.log('uuuu',url);
    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin' : true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      responseType: 'json',
     }).then(res => {
        const book = res.data.libro;
        console.log('holas y', book);  
        this.setState({ book });
      });
    console.log('adios y',this.state.book);  
  }

  render() {
    return(
      <div>
        <h4>Carrito de Compras</h4>
          <div className="show-product">
            
          <div className="item-wrapper2">
            <img className="item-image2" alt={this.state.book.titulo} src={this.state.book.imagen} />
            <form class="col s12" onSubmit={this.handleSubmit}>
              <div class="row">
                <div class="input-field col s12  l6">
                  <label for="titulo">NOMBRE COMPLETO</label>
                  <input placeholder="nombre y apellido" id="titulo" type="text" class="validate" onChange={this.handleChangeTitulo} />
                </div>
                <div class="input-field col s12  l6">
                  <label for="descripcion">DIRECCION</label>
                  <input placeholder="direccion" id="descripcion" type="text" class="validate" onChange={this.handleChangeDesc}/>
                </div>
                <div class="input-field col s12  l6">
                  <label for="precio">CIUDAD</label>
                  <input placeholder="bolivianos" id="precio" type="text" class="validate" onChange={this.handleChangePre}/>
                </div>
                <div class="input-field col s12  l6">
                  <label for="precio">CELULAR</label>
                  <input placeholder="nro celular" id="precio" type="text" class="validate" onChange={this.handleChangePre}/>
                </div>
                <button type="submit">COMPRAR</button>
              </div>
            </form>
          </div>
        </div> 
      </div>
    );
  }
}

export default CartProducts;
