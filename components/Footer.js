import React from 'react';
import './main.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h3>{this.props.name}</h3>
        <p>
          <i className="material-icons" style={{transform:'rotateY(180deg)'}}>thumb_up</i>
          <i className="material-icons">sentiment_very_satisfied</i>
          <i className="material-icons">thumb_up</i>
          <i className="material-icons" style={{display:'block',marginTop:'-10px'}}>pause</i>
        </p>
      </footer>
    )
  }
}

export default Footer;
