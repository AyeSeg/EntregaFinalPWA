import axios from 'axios';
import { Component } from 'react';
import '../App.css';

export default class Card extends Component {

    state = {
      cocktails: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/cocktails');
        this.setState({cocktails: res.data});
    }

    render() {
        return (
          
            <div className="card-container">
              {this.state.cocktails.map(cocktail => 
              
              <div className="card" key={cocktail.id}>
              <img className="card-img-top" src={cocktail.img} alt={cocktail.name} />
                <div className="card-body">
              <h3 className="card-title">{cocktail.name}</h3> <p className="card-text">{cocktail.description}</p> <a href="/" className="btn-ver-receta">Ver receta</a>
                </div>

              </div>)}
            </div>);
            };
          };