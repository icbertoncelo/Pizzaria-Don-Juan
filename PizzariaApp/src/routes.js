import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import Main from '~/pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Login,
    // Register,
    Order: createStackNavigator(
      {
        Main,
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
