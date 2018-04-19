import React, { Component } from "react";
import "./header.css"

class Header extends Component {
  render() {
    return (
      <div>
        <img className="headerImage" src="style/images/calle.jpg" alt="Carl Bildt" />
        <div className="headerH1">
          <h1>Politweet</h1>
        </div>

        <div className="headerH2">

          <h2>Choose your fighters</h2>
        </div>
      </div>
    );
  }
}

export default Header;
