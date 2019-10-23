import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {navigate} from '../../services/navigation';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => navigate('NewsFeed')}>Welcome to my template</Text>
      </View>
    );
  }
}
