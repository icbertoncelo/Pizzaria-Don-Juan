import { NavigationActions } from 'react-navigation';

let nav;

function setTopLevelNavigation(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default {
  setTopLevelNavigation,
  navigate,
};
