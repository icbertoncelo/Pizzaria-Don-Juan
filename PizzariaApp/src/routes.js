import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import Main from '~/pages/Main';
import Type from '~/pages/Type';
import Size from '~/pages/Size';
import Shopp from '~/pages/Shopp';
import Finish from '~/pages/Finish';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Login,
    // Register,
    Order: createStackNavigator(
      {
        Main,
        Type,
        Size,
        Shopp,
        Finish,
      },
      {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
          header: null,
        },
      },
    ),
  }),
);

export default Routes;
