import React from 'react'
import { createDrawerNavigator,createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Settings from './Settings/index';  //Tab Nav
import Profile from './Profile/index'; //Stack Nav

const Home = createDrawerNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Back',
      drawerIcon: ({ tintColor }) => <Icon name="arrow-alt-circle-left" size={17} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  }
});

const App = createAppContainer(Home);

export default App;