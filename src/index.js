import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
//Webpack se encarga de empaquetar estas direcciones en una variable que se podra utilizar luego.

import App from "./components/App";

const container = document.getElementById("app");
//ReactDOM.render(_qué_, _donde_)
ReactDOM.render(<App />, container);
//another way to do this
/**
 const element = document.createElement('h1');
 element.innerText= 'Hello World';
 const box = document.getElementById('app');
 box.appendChild(element);
 */
//React elements
/**
 * const element = react.createElement(
 * '_type_',
 * {_properties_}, the properties can be html atributes, every html has its own atributes
 * '_content_')
 */
// Introducing variables to jsx or react elements
/**
 * const name ='Richard'
 * const element = react.createElement('h1', {href='youtube.com'}, `This is ${name}`) the third, fourth and so on elements are childrens, so you can create as much as you want.
 * const element = <h1> This is {name} </h1> this is jsx
 * const element = <h1> {_Expressions_} Inside curly braces you can introduce whatever expression, a function, a variable or an object, some values will not be shown, such as null, undefiner or false
 */
