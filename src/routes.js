import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/global';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
