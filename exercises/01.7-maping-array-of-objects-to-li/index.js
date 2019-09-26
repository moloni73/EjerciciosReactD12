import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const mappingFunction = (item, index) => {
	return <li className="list-group-item">{item}</li>;
	// return something in JSX.
};

const htmlList = planets.map(mappingFunction);

/**
 * 1) Create the maping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{htmlList}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
