import React, { Component, createContext } from 'react';
import { auth, generateUserDocument } from './firebase';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };

  render() {
    console.log(this.state.user);
    return (
      <>
        {this.state.user !== null && (
          <UserContext.Provider value={this.state.user}>{this.props.children}</UserContext.Provider>
        )}
      </>
    );
  }
}
export default UserProvider;
