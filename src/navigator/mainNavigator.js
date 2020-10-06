import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile131077Navigator from '../features/UserProfile131077/navigator';
import Tutorial131076Navigator from '../features/Tutorial131076/navigator';
import NotificationList131048Navigator from '../features/NotificationList131048/navigator';
import Settings131047Navigator from '../features/Settings131047/navigator';
import Settings131039Navigator from '../features/Settings131039/navigator';
import UserProfile131037Navigator from '../features/UserProfile131037/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile131077: { screen: UserProfile131077Navigator },
Tutorial131076: { screen: Tutorial131076Navigator },
NotificationList131048: { screen: NotificationList131048Navigator },
Settings131047: { screen: Settings131047Navigator },
Settings131039: { screen: Settings131039Navigator },
UserProfile131037: { screen: UserProfile131037Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
