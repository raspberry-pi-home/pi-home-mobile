/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  DrawerLayoutAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from './styles/theme.style';
import Home from './components/Home';
import Devices from './components/Devices';
import DrawerMenu from './components/DrawerMenu';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {navigationRef} from './RootNavigation';

const DrawerNavigation = createDrawerNavigator(
  {
    Home: Home,
    Devices: Devices,
  },
  {
    //initialRouteName: 'Home',
    drawerBackgroundColor: 'lightblue',
    contentOptions: {
      activeTintColor: 'red',
    },
    contentComponent: DrawerMenu,
  },
);

/*const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation,
  }),
);*/

/*const Stack = createStackNavigator();
const DevicesScreen = ({navigation}) => {
  return <DeviceList />;
};*/

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const drawerRef = createRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={'left'}
        ref={drawerRef}
        renderNavigationView={() => <DrawerMenu drawerRef={drawerRef} />}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: theme.PRIMARY_COLOR,
              },
              headerTintColor: theme.WHITE_COLOR,
            }}
          />
          <Stack.Screen
            name="Devices"
            component={Devices}
            options={{
              title: 'Devices',
              headerStyle: {
                backgroundColor: theme.PRIMARY_COLOR,
              },
              headerTintColor: theme.WHITE_COLOR,
            }}
          />
        </Stack.Navigator>
      </DrawerLayoutAndroid>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    padding: 8,
  },
});

export default App;
