import Login from './pages/Login';
import NewsFeed from './pages/NewsFeed';
import CustomMenu from './pages/Drawer';
import React from 'react';
import {Alert, View, TouchableOpacity, Image, Platform} from 'react-native';
import {createAppContainer, DrawerItems} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack';

import hamburgerIcon from './assets/images/hamburger.png';

const Drawer = createDrawerNavigator(
  {
    NewsFeed: {
      screen: NewsFeed,
    },
  },
  {
    unmountInactiveRoutes: true,
    contentComponent: CustomMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      inactiveBackgroundColor: 'transparent',
      activeBackgroundColor: '#fff',
      inactiveTintColor: '#fff',
      activeTintColor: '#06234C',
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Drawer,
      navigationOptions: ({navigation}) => {
        return {
          headerMode: 'float',
          title: 'Title',
          headerTitleStyle: {
            flexGrow: 1,
            textAlign: 'center',
            alignSelf: 'center',
          },
          headerStyle: {
            backgroundColor: '#06234C',
          },
          headerTintColor: '#FFF',
          headerRight: <View />,
          headerLeft: (
            <TouchableOpacity
              style={{marginLeft: 5}}
              onPress={() => navigation.toggleDrawer()}>
              <Image style={{margin: 5}} source={hamburgerIcon} />
            </TouchableOpacity>
          ),
        };
      },
    },
  },
  {},
);

export default createAppContainer(AppNavigator);
