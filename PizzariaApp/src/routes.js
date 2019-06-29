import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import Main from '~/pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Main,
  }),
);

export default Routes;
