import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Peti extends React.Component {
  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <p>Enter your Email:</p>
        <input
          type="text"
        />
		<br></br>
		<button>Submit</button>
      </form>
    );
  }
}

export default Peti;