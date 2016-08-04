import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <div style={{position:'relative',minHeight:'100%'}}>
        <Header name="Introducción a Redux" />
        <div style={{paddingBottom:'150px'}}>
          {this.props.children}
        </div>
        <Footer name="Jorge Calle De hoyos"/>
      </div>
    )
  }
}

export default App;
