import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCURbuXfr5qYjG2WeLzM8PN4Sxw68Q81HQ",
      authDomain: "auth-fc1d5.firebaseapp.com",
      databaseURL: "https://auth-fc1d5.firebaseio.com",
      projectId: "auth-fc1d5",
      storageBucket: "auth-fc1d5.appspot.com",
      messagingSenderId: "714157044723"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderContent = () => {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => {
              firebase.auth().signOut()
            }}>Log out</Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'}/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App
