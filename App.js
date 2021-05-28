import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    MoviesAPP: HomeScreen,
  },
  {
    initialRouteName: 'MoviesAPP',
  }
);

export default createAppContainer(navigator);
