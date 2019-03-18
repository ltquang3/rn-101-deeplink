import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Scenes/Home';
import People from './Scenes/People';

 const AppNavigator = createStackNavigator({
     Home: { screen: Home },
     People: { screen: People }  
 });

 const AppContainer = createAppContainer(AppNavigator);

 export default AppContainer;