import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      username : '@jomaca11',
      avatar: 'https://pbs.twimg.com/profile_images/653965088974610436/ST5dQZAG.jpg',
      link: 'https://twitter.com/Jomaca11',
      description: 'Ingeniero de sistemas | fullstack developer'
    }
  }
  render() {
    return (
      <section className="container">
        <article className="user">
          <img src={this.state.avatar} alt="jomaca" />
          <div className="user-description">
            <p className="user-name">Jorge Calle | <a href={this.state.link} target="_blank">{this.state.username}</a></p>
            <p>{this.state.description}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default About;
