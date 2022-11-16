/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Home from './Pages/Home/Home';
import BlogForm from './Pages/BlogForm/BlogForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BlogForm" component={BlogForm} />
      </Stack.Navigator>
    </>
  );
};

const App = () => {
  const theme = {
    ...DefaultTheme,
  };

  return (
    <Provider store={store} >
    <PaperProvider theme={theme}>
      <NavigationContainer>
          <Main />
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
};

export default App;
