import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Payment from './Payment';
import Menu from './CRUD';
import Awal from './Ahome';


const SettingsTabs = createBottomTabNavigator({
    Awal: {
        screen: Awal,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={17}
                    color={tintColor} />
            )
        }
    },

    Menu: {
        screen: Menu,
        navigationOptions: {
            title: "Menu",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="th-large"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    
    Payment: {
        screen: Payment,
        navigationOptions: {
            title: "Shopping",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="cart-plus"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });
