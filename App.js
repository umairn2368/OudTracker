import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from './app/Navigation/information';
import SplashScreen from 'react-native-splash-screen';


const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <NavigationContainer>
      <Information/>
    </NavigationContainer>
  );
};

export default App;
