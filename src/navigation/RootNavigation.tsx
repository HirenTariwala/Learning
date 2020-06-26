import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home/Home';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { defaultIconSize } from '../../src/common/style/TypeGraphy';
import { PrimaryColor, SecondaryColor } from '../../src/common/style/Colors';
import Upload from 'src/screens/Upload/Upload';

/**
 * Create stack navigator for application
 * https://reactnavigation.org/docs/hello-react-navigation#creating-a-stack-navigator
 */
const AppStack = createStackNavigator();

/**
 * Create Bottom Tab Navigation
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createBottomTabNavigator();

/**
 * Set Header defualt navigation options
 * https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
 */
const defaultNavigationOptions: StackNavigationOptions = {
  /**
   * Set Header style
   */
  headerStyle: {
    backgroundColor: PrimaryColor,
  },
  /**
   * Set Header back title
   */
  headerBackTitle: 'Back',
  /**
   * Set Header font color
   */
  headerTintColor: SecondaryColor,
  /**
   * Set Header align
   */
  headerTitleAlign: 'center',
};

/**
 * Maon Bottom Tabs
 */
const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: PrimaryColor,
        showLabel: false,
      }}
      screenOptions={defaultNavigationOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={defaultIconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons
              name="magnifier"
              color={color}
              size={defaultIconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons
              name="plus"
              color={color}
              size={defaultIconSize + 5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trending"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="fire" color={color} size={defaultIconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="user" color={color} size={defaultIconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
/**
 * Root Navigation For Application
 */
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={defaultNavigationOptions}>
        <AppStack.Screen
          name="Home"
          component={BottomTabs}
          options={{
            headerTitle: 'Memers',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
