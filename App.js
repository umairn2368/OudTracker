import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from './app/Navigation/information';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Information/>
    </NavigationContainer>
  );
};

export default App;
