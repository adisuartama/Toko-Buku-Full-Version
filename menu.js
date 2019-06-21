import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './App';
import Logout from './login2';


const AppNavigator = createStackNavigator(
        {
            Utama: {screen:MainScreen,navigationOptions:{header:null}},
            Login: {screen:Logout,navigationOptions:{header:null}},
        },
        {
            initialRouteName: "Login"
        }
        );
export default createAppContainer(AppNavigator);