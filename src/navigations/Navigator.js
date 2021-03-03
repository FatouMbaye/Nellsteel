import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Affiche from '../screens/Affiche';
import Affiche1 from '../screens/Affiche1';
import Affiche2 from '../screens/Affiche2';
import Affiche22 from '../screens/Affiche22';
import Affiche3 from '../screens/Affiche3';
import Products from '../screens/Products';
import Contact from '../screens/Contact';


const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
   Login:{screen:Login},
   Register:{screen:Register},
    Affiche:{screen:Affiche},
    Affiche1:{screen:Affiche1},
    Affiche2:{screen:Affiche2},  
    Affiche22:{screen:Affiche22},
    Affiche3:{screen:Affiche3},
    Products:{screen:Products},
    Contact:{screen:Contact},
   

   
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);