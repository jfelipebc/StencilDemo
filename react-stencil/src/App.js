import React, { Component } from 'react';
import './App.css';

const API_URL = 'https://randomuser.me/api/?results=20';
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch(API_URL)
      .then(results => results.json())
      .then(data => {
        const users = data.results.map(user => {
          const {
            name: { first, last },
            location: { city },
            picture: { large }
          } = user;
          return {
            fullName: `${capitalize(first)} ${capitalize(last)}`,
            city,
            picture: large
          };
        });
        this.setState({ users });
      });
  }

  render() {
    const { users = [] } = this.state;
    return (
      <div className="App">
        {users.map((user, index) => (
          <st-card
            key={index}
            photo={user.picture}
            name={user.fullName}
            city={user.city}
          />
        ))}
      </div>
    );
  }
}

export default App;
