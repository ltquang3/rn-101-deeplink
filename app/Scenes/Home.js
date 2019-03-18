import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking, Platform, TouchableHighlight } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  componentDidMount() {
    if (Platform.OS == 'android') {
      Linking.getInitialURL().then(this.handleURL);
    } else {
      Linking.addEventListener('url', this.handleURL);
    }
    console.log('abc');
    console.log(this.props.navigation);
  }
  
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleURL);
  }

  handleURL(url) {
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];

    if (routeName === 'people') {
      navigate('People', { id, name: 'ltquang' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('People', { id: 0, name: 'ltquang'})}>
      <Text style={styles.welcome}>Welcome Deeplink demo!</Text>
      </TouchableHighlight>
        
        <Text style={styles.instructions}>This demo will show you how to implement deeplink feature on RN</Text>
        <Text style={styles.instructions}>URL format will be: {'\n'}rn101deeplink://{'pagename'}/{'index'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home;