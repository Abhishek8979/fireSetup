import {React} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import signup from './signup/Signup'
import Login from './login/login';


const Screens = createStackNavigator({
    userscreen: signup,
    login : Login
},
{
    initialRouteName:'userscreen'
})
export default createAppContainer(
    Screens
)
