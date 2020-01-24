import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Splash from '../screens/Splash';
import MainStack from './MainStack';

const SwitchNavigator = createSwitchNavigator({
  Splash,
  MainStack
},
  {
    headerLayoutPreset: 'center',

  });

const AppNavigation = createAppContainer(SwitchNavigator)
export default AppNavigation;