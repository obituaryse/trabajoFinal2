import React, { Component } from 'react';
import axios from 'axios';
import map from 'lodash/map';
import { URL_AUTOR, URL_POST_BOOK } from '../../shared/utils/constants';

class NewItem extends Component {
  state = {
    titulo: '',
    descripcion: '',
    precio: '',
    imagen: '',
    autorId: null,
    autores: []
  }

  componentDidMount() {
    axios.get(URL_AUTOR, {
      headers: {
        'Access-Control-Allow-Origin' : true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      responseType: 'json',
     }).then(res => {
        const autores = res.data.autores;
        this.setState({ autores });
      }); 
  }


  handleChangeTitulo = event => {
    this.setState({ titulo: event.target.value });
  }
  handleChangeDesc = event => {
    this.setState({ descripcion: event.target.value });
  }
  handleChangePre = event => {
    this.setState({ precio: event.target.value });
  }
  handleChangeImg = event => {
    this.setState({ imagen: event.target.value });
  }
  handleChangeAutor = event => {
    this.setState({ autorId: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const book = {
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      precio: this.state.precio,
      imagen: this.state.imagen
    };

    axios.post(URL_POST_BOOK, { 
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      precio: this.state.precio,
      imagen: this.state.imagen,
      autorId: this.state.autorId })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="show-product">
        <div className="item-wrapper3">
          <form class="col s12" onSubmit={this.handleSubmit}>
          <div class="row">
              <div class="input-field col s12  l6">
                <label for="titulo">TITULO</label>
                <input placeholder="Titulo" id="titulo" type="text" class="validate" onChange={this.handleChangeTitulo} />
              </div>
              <div class="input-field col s12  l6">
                <label for="descripcion">DESCRIPCION</label>
                <input placeholder="Descripcion" id="descripcion" type="text" class="validate" onChange={this.handleChangeDesc}/>
              </div>
              <div class="input-field col s12  l6">
                <label for="precio">PRECIO</label>
                <input placeholder="Bolivianos" id="precio" type="text" class="validate" onChange={this.handleChangePre}/>
              </div>
              <div class="input-field col s12  l6">
                <label>AUTOR</label>
                <select className="browser-default" onChange={this.handleChangeAutor}>
                  <option value="" disabled selected>Escoger una opcion</option>
                  {map(this.state.autores, (autor)=> (
                    <option value={autor.id} >{autor.nombre}</option>
                  ))}
                </select>
              </div>
              <div class="input-field col s12  l6">
                <label for="imagen">IMAGEN URL</label>
                <input id="imagen" type="text" class="validate" onChange={this.handleChangeImg}/>
              </div>
              <button type="submit">AGREGAR</button>
            </div>
          </form>
        </div>
      </div>       
    );
  }
}

export default NewItem;
