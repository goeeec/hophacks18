import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import NavBar from './NavBar';

class Result extends Component {
  render() {
    return (
      <div class="col s12 m4 l3 cardsDisplay">
        <div class="card hoverable">
          <div class="card-image">
            <img src={this.props.meal.image} />
            <span class="card-title">{this.props.meal.name}</span>
          </div>
          <div class="card-content">
            <p>{this.props.meal.category}</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    );
  }
}

class ResultPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div class="row">
          {this.props.results.map((meal, key) => {
            return (
              <Result meal={meal} index={key} key={key} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ResultPage;