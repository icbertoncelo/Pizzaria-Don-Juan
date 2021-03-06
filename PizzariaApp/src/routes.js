import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import Main from '~/pages/Main';
import Type from '~/pages/Type';
import Size from '~/pages/Size';
import Shopp from '~/pages/Shopp';
import Finish from '~/pages/Finish';
import Profile from '~/pages/Profile';

export default function createNavigator(signedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Register,
        Order: createStackNavigator(
          {
            Main,
            Type,
            Size,
            Shopp,
            Finish,
            Profile,
          },
          {
            defaultNavigationOptions: {
              header: null,
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'Order' : 'Login',
      },
    ),
  );
}
