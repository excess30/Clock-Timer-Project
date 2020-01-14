import React, {Component} from 'react';
import Header from '../header/Header';
import Clicker from '../clicker/Clicker';

/* Exporting Class named as ClickerApp which extends the React Component */
export default class ClickerApp extends Component
{
  /* A React Constructor is called, Once the React Constructor is called super() is by default */
  constructor()
  {
    super();

    /*State of a component should prevail throughout the lifetime, thus we must first have some initial state, to do so we should define the State in the constructor of the component’s class */
    this.state = {
      title: 'React Clicker'
    };
  }

  render()
  {
    /* As multiple tags cannot be read in JSX until and unless we wrap them in a <div> tag */
    return (
      <div>
        <Header title = {this.state.title} />
        <div className = "mt-5">
        <Clicker />
        </div>
      </div>
    );
  }
}
