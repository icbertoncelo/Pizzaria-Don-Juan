import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import Main from '~/pages/Main';
import Type from '~/pages/Type';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Login,
    // Register,
    Order: createStackNavigator(
      {
        Main,
        Type,
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
