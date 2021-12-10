import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {persistor, store} from './app/redux/store';
import Navigation from './app/navigation/index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;