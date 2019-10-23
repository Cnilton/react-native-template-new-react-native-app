import React, {Component} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  DrawerHeaderContainer,
  Image,
  StudentName,
  StudentCourse,
  ContextButton,
  ContextLabel,
  DrawerItem,
  DrawerItemText,
  LeaveLabel,
  ScrollContainer,
  DrawerItemImage,
  LeaveButton,
  DrawerList,
} from './styles';

import newsFeedIcon from '../../assets/images/hamburger.png';

import {connect} from 'react-redux';

class CustomMenu extends Component {
  constructor(props) {
    super(props);
    const {login} = this.props;
    this.state = {
      nome: '',
      lastPage: 0,
      style: [(newsFeed = {
                backgroundColor: '#fff',
                color: '#06234C',
              })],
    };
  }

  changePage = (page, index) => {
    const lastPage = this.state.lastPage;
    this.setState({
      style: [
        ...this.state.style,
        (this.state.style[lastPage].backgroundColor = 'transparent'),
        (this.state.style[lastPage].color = '#fff'),
      ],
    });
    this.setState({
      style: [
        ...this.state.style,
        (this.state.style[index].backgroundColor = '#fff'),
        (this.state.style[index].color = '#06234C'),
      ],
    });
    this.setState({lastPage: index});
    this.props.navigation.navigate(page);
  };

  renderItem = ({item, index}) => {
    let scope = this;
    const {login} = this.props;
    const listRoutes = ['NewsFeed'];
    var itemIcon = [newsFeedIcon];
    return (
      <DrawerItem
        color={scope.state.style[index].backgroundColor}
        onPress={() => this.changePage(listRoutes[index], index)}>
        <DrawerItemImage resizeMode="contain" source={itemIcon[index]} />
        <DrawerItemText color={scope.state.style[index].color}>
          {item}
        </DrawerItemText>
      </DrawerItem>
    );
  };

  formatName = nome => {
    var names = [];
    var formatedName = '';
    return formatedName;
  };

  alert = () => {
    let scope = this;
    Alert.alert(
      'Sair',
      'Você deseja sair?',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Sair',
          onPress: () => {
            AsyncStorage.clear();
            scope.props.navigation.navigate('Login');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    let scope = this;
    const {login, context} = this.props;
    const listItens = ['Notícias'];
    return (
      <ScrollContainer>
        <Container>
          <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <DrawerHeaderContainer/>
            <DrawerList
              data={listItens}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem}
            />
            <LeaveButton onPress={() => this.alert()}>
              <DrawerItemImage resizeMode="contain" source={newsFeedIcon} />
              <LeaveLabel>Sair</LeaveLabel>
            </LeaveButton>
          </SafeAreaView>
        </Container>
      </ScrollContainer>
    );
  }
}

const mapStateToProps = state => ({
  context: state.context,
  login: state.login,
});

export default connect(mapStateToProps)(CustomMenu);
