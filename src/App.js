import React, { Component } from "react";
import Account from "./Account";

class App extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Display Active Users Account Details</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map((user) => {
            return <Account key={user.username} user={user} />;
          })
        ) : (
          <h3>Fetching Users...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default App;
