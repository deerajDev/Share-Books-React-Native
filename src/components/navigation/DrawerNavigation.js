import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from '../../screens/Home';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import MyBooks from '../../screens/MyBooks';
import SellBook from '../../screens/SellBook';
import Reset from '../../screens/Reset';

import MenuDrawer from './MenuDrawer';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  contentComponent: MenuDrawer,
  drawerWidth: WIDTH * 0.5,
  initialRouteName: 'Reset',
  navigationOptions: {
    title: 'Share Books',
  },
};

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    SellBook: {
      screen: SellBook,
    },
    MyBooks: {
      screen: MyBooks,
    },
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
    Reset: {
      screen: Reset,
    },
  },
  DrawerConfig,
);

export default createAppContainer(DrawerNavigation);
